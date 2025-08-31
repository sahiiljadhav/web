const fs = require('fs');
const path = require('path');

// Create dist directory if it doesn't exist
const distDir = path.resolve(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy client build to dist
const clientBuildDir = path.resolve(__dirname, 'build/client');
const assetsDir = path.join(distDir, 'assets');

// Copy assets directory
if (fs.existsSync(path.join(clientBuildDir, 'assets'))) {
  if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir, { recursive: true });
  }
  
  const assets = fs.readdirSync(path.join(clientBuildDir, 'assets'));
  assets.forEach(file => {
    fs.copyFileSync(
      path.join(clientBuildDir, 'assets', file),
      path.join(assetsDir, file)
    );
  });
  console.log('Copied assets to dist/assets');
}

// Copy the .vite directory for module resolution
const viteDir = path.join(distDir, '.vite');
if (fs.existsSync(path.join(clientBuildDir, '.vite'))) {
  if (!fs.existsSync(viteDir)) {
    fs.mkdirSync(viteDir, { recursive: true });
  }
  fs.copyFileSync(
    path.join(clientBuildDir, '.vite', 'manifest.json'),
    path.join(viteDir, 'manifest.json')
  );
  console.log('Copied .vite manifest to dist/.vite');
}

// Create a proper index.html that uses the React Router client build
const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tall Giraffe Studio</title>
  <link rel="stylesheet" href="/assets/root-C-z860QC.css">
  <link rel="icon" href="/src/__create/favicon.png" />
  <script src="https://kit.fontawesome.com/2c15cc0cc7.js" crossorigin="anonymous" async></script>
  <style>
    /* Additional styles for animations */
    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-20px); }
    }
    .animate-float {
      animation: float 6s ease-in-out infinite;
    }
  </style>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/assets/entry.client-BER7ETrs.js"></script>
</body>
</html>`;

fs.writeFileSync(path.join(distDir, 'index.html'), indexHtml);
console.log('Created index.html in dist');

console.log('Static build completed successfully!');
