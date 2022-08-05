import express from 'express';
import cors from 'cors';
import route from './routes';

const app = express();
app.use(express.json());
app.use(cors());

app.use(route);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});