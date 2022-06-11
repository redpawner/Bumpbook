const express = require('express');
require('dotenv').config();
app = express();
const cors = require('cors');
const authMiddleware = require('./middleware/auth');
const router = require('./router');
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(router);
// app.use([express.static('bumpImage')]);
app.use((req, res) => {
  res.sendStatus(404);
});

(async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Connection made at http://localhost:3001`);
    });
  } catch (error) {
    console.log(error);
  }
})();
