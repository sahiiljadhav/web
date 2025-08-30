const { createServer } = require('node:http');
const path = require('node:path');
const fs = require('node:fs');

const server = createServer((req, res) => {
  // Add proper response methods to res object
  res.status = function(code) {
    this.statusCode = code;
    return this;
  };
  res.json = function(data) {
    this.setHeader('Content-Type', 'application/json');
    this.end(JSON.stringify(data));
    return this;
  };
  
  // Serve static files directly
  const url = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, 'dist', url.replace(/^\//, ''));
  
  if (url.startsWith('/api')) {
    // Handle API requests
    try {
      // Handle root API endpoint
      if (url === '/api' || url === '/api/') {
        const apiHandler = require('./api/index.js');
        if (typeof apiHandler === 'function') {
          apiHandler(req, res);
          return;
        }
      } else {
        // Try to load the API handler for other endpoints
        const apiPath = path.join(__dirname, url.replace(/^\/api/, 'api'));
        if (fs.existsSync(apiPath + '.js')) {
          const apiHandler = require(apiPath);
          if (typeof apiHandler === 'function') {
            apiHandler(req, res);
            return;
          }
        }
      }
      // If no handler found, return 404
      res.status(404).json({ error: 'API endpoint not found' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
    return;
  }
  
  // Check if the file exists
  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // If file doesn't exist, serve index.html (for client-side routing)
      fs.readFile(path.join(__dirname, 'dist', 'index.html'), (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end('Internal Server Error');
          return;
        }
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
      });
      return;
    }
    
    // Serve the file
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 500;
        res.end('Internal Server Error');
        return;
      }
      
      // Set content type based on file extension
      const ext = path.extname(filePath);
      let contentType = 'text/plain';
      
      switch (ext) {
        case '.html':
          contentType = 'text/html';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.js':
          contentType = 'text/javascript';
          break;
        case '.json':
          contentType = 'application/json';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.jpg':
        case '.jpeg':
          contentType = 'image/jpeg';
          break;
      }
      
      res.setHeader('Content-Type', contentType);
      res.end(data);
    });
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});