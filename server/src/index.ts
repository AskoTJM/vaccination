import express from 'express';
import connectToDB from './database/dbconnection';
import populateDatabase from './database/dbpopulate';
import readSourceFileToArray from './utils/fileUtils';

const app = express();
const PORT = 5000;
app.use(express.json);

connectToDB();
populateDatabase();

app.get('/', (req,res) => res.send('EExpress + TypeScript Server'));
  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});