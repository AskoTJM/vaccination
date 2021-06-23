import express from 'express';

const app = express();
const PORT = 5000;

app.get('/', (req,res) => res.send('EExpress + TypeScript Server'));
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
