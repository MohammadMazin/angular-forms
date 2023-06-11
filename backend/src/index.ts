import express, { Request, Response } from 'express';
// allow cors
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
// Middleware to parse JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint for accepting form data
app.post('/form-data', (req: Request, res: Response) => {
  const formData = req.body;
  res.json(formData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
