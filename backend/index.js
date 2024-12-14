const express = require('express');
const { handler } = require('./controller/controller');
const PORT = process.env.PORT || 4040;

const app = express();
app.use(express.json());

app.post('*', async (req, res) => {
  console.log(req.body);
  // res.json({ message: 'PSOT from the backend!' });
  res.send(await handler(req));
});

app.get('*', async (req, res) => {
  // res.json({ message: 'GET from the backend!' });
  res.send(await handler(req));
});

// app.get('/execute-sql', async (req, res) => {
//   const { sql } = req.query;

//   const result = await handler(sql);
  
//   if (result === 'Invalid Request') {
//     res.status(400).json({ error: 'Invalid Request' });
//   } else {
//     res.json(result);
//   }
// });

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log(`Server is listening on PORT:${PORT}`);
});