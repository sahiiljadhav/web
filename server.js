import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createRequestHandler } from '@react-router/node';

const __dirname = dirname(fileURLToPath(import.meta.url));

const handler = createRequestHandler({
  build: join(__dirname, 'dist'),
});

const server = createServer((req, res) => {
  handler(req, res).catch((error) => {
    console.error(error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});