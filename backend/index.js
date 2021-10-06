const connectToMongo = require("./db");
const express = require('express');
const cors = require("cors");

const app = express();
const port = 5000;

connectToMongo();

// app.get('/', (req, res) => {
//   res.send('Hello Aryan!');
// })

// cors enable
app.use(cors());

// to use request body
app.use(express.json());

// available routes
app.use("/api/auth" , require("./routes/auth"));
app.use("/api/notes" , require("./routes/notes"));


app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
