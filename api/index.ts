import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();

// Create __filename and __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files
const clientPath = path.join(__dirname, '../client/dist');
app.use(express.static(clientPath));

// Fallback for React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
