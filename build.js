const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Create dist directory if it doesn't exist
  const distDir = path.join(__dirname, 'dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Create a simple index.html file
  const indexHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tall Giraffe Studio</title>
  <link rel="stylesheet" href="/assets/styles.css">
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/main.js"></script>
</body>
</html>
`;

  fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);

  // Create assets directory
  const assetsDir = path.join(distDir, 'assets');
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
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

  // Create a simple JavaScript file
  const mainJs = `
// Main entry point
console.log('Application loaded');

// Create root element
const root = document.getElementById('root');
root.innerHTML = '<div class="container"><h1>Tall Giraffe Studio</h1><p>Website is under maintenance. Please check back soon.</p></div>';
`;

  fs.writeFileSync(path.join(assetsDir, 'main.js'), mainJs);

  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}