// This file is used by Vercel to build the project
const { execSync } = require('child_process');

try {
  // Run the custom build script
  console.log('Building the React Router project using custom build script...');
  require('./build.js');
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}