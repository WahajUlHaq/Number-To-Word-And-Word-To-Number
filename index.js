const express = require('express');
const cors = require('cors');

const assignmentRouter = require('./src/routers/assignment/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(assignmentRouter);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
