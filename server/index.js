express = require('express');
app = express();
const cors = require('cors');
const PORT = 3001;
const router = require('./router');

app.use(cors());
app.use(express.json());
app.use(router);

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
