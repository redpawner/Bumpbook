const express = require('express');
require('dotenv').config();
const app = express();
const cors = require('cors');
const router = require('./router');
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);
app.use((req, res) => {
  res.sendStatus(404);
});
(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Connection made at http://localhost:` + PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();
