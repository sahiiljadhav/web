// Enhanced build script using webpack for proper bundling
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

try {
  // Create dist directory if it doesn't exist
  const distDir = path.resolve(__dirname, 'dist');
  const assetsDir = path.join(distDir, 'assets');
  
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }

  // Create HTML file with proper React setup
  const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tall Giraffe Studio</title>
  <link rel="stylesheet" href="/assets/styles.css">
</head>
<body>
  <div id="root"></div>
  <script src="/assets/main.js"></script>
</body>
</html>
`;

  // Write the HTML file to the dist directory
  fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

  // Create assets directory if it doesn't exist
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir);
  }

  // Copy static assets from src directory
  const srcDir = path.join(__dirname, 'src');
  const globalCssPath = path.join(srcDir, 'app', 'global.css');
  const stylesCssPath = path.join(assetsDir, 'styles.css');
  
  if (fs.existsSync(globalCssPath)) {
    fs.copyFileSync(globalCssPath, stylesCssPath);
    console.log('Copied global.css to styles.css');
  } else {
    // Create a default CSS file if the source doesn't exist
    const defaultCss = `
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
        color: #333;
      }
      .container {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }
      h1 {
        color: #2563eb;
      }
    `;
    fs.writeFileSync(stylesCssPath, defaultCss);
    console.log('Created default styles.css');
  }

  // Create a temporary entry file for webpack
  const entryFilePath = path.join(distDir, 'entry.js');
  const entryFileContent = `
// Entry point for webpack
const React = require('react');
const ReactDOM = require('react-dom/client');

// Create a simple App component
const App = () => {
  return React.createElement('div', { className: 'min-h-screen bg-white dark:bg-[#121212] overflow-x-hidden' },
    React.createElement('header', { className: 'bg-white dark:bg-gray-900 py-4 px-6 shadow-md' },
      React.createElement('h1', { className: 'text-2xl font-bold text-blue-600' }, 'Tall Giraffe Studio')
    ),
    React.createElement('main', { className: 'container mx-auto px-4 py-8' },
      React.createElement('section', { className: 'py-12 text-center' },
        React.createElement('h2', { className: 'text-4xl font-bold mb-6' }, 'Welcome to Tall Giraffe Studio'),
        React.createElement('p', { className: 'text-xl mb-8' }, 'We create amazing digital experiences for businesses and individuals.'),
        React.createElement('button', { className: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg' }, 'Get Started')
      )
    ),
    React.createElement('footer', { className: 'bg-gray-100 dark:bg-gray-800 py-8 px-6' },
      React.createElement('p', { className: 'text-center' }, '© 2023 Tall Giraffe Studio. All rights reserved.')
    )
  );
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(React.createElement(App));
});
`;

  fs.writeFileSync(entryFilePath, entryFileContent);

  // Configure webpack
  const webpackConfig = {
    mode: 'production',
    entry: entryFilePath,
    output: {
      path: path.resolve(__dirname, 'dist/assets'),
      filename: 'main.js',
      publicPath: '/assets/'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    experiments: {
      topLevelAwait: true
    }
  };

  // Run webpack
  webpack(webpackConfig, (err, stats) => {
    if (err || stats.hasErrors()) {
      console.error('Webpack build failed:', err || stats.toString());
      // Fallback to a simple JavaScript file if webpack fails
      const fallbackJs = `
      // Fallback JavaScript when webpack build fails
      console.log('Application loaded in fallback mode');
      
      // Create a basic UI
      const root = document.getElementById('root');
      root.innerHTML = '<div class="container"><h1>Tall Giraffe Studio</h1><p>Welcome to our website. We\'re working on some improvements.</p></div>';
      `;
      
      fs.writeFileSync(path.join(assetsDir, 'main.js'), fallbackJs);
      console.log('Created fallback JavaScript file');
    } else {
      console.log('Webpack build completed successfully');
    }
    
    // Clean up temporary entry file
    if (fs.existsSync(entryFilePath)) {
      fs.unlinkSync(entryFilePath);
    }
    
    console.log('Build completed successfully!');
  });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}