const express = require('express');
const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());

app.post('*', async (req, res) => {
  console.log(req.body);
  res.json({ message: 'Hello from the backend!' });
});

app.get('*', async (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Server is listening on PORT:${PORT}`);
});