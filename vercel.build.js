// This file is used by Vercel to build the project
import { execSync } from 'child_process';

try {
  // Run the build command
  console.log('Building the React Router project...');
  execSync('npx react-router build', { stdio: 'inherit' });
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}