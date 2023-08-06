const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const PORT = 5000;

const http = require("http").createServer(app);

const mongoose = require("mongoose");

const cors = require("cors");
const path = require("path");

// Enable CORS
app.use(cors());

app.use(express.json());

require("./Models/User");
// require("./models/Admin");
// require("./models/type");
// require("./models/course");
// require("./models/email");
// require("./models/visitors");
app.use(require("./Routes/Admin"));
// app.use(require("./routes/admin"));
// app.use(require("./routes/type"));
// app.use(require("./routes/course"));
// app.use(require("./routes/email"));
// app.use(require("./routes/visitor"));

mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo");
});
mongoose.connection.on("error", () => {
  console.log("Failed to connect to mongo");
});
// Serve the ads.txt file
app.use(express.static(path.join(__dirname, "static")));
app.get('/ads.txt', (req, res) => {
  res.sendFile(path.join(__dirname, '/ads.txt'));
});
// Serve the frontend
app.use(express.static(path.join(__dirname, "link/build")));
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "link/build/index.html"),
    function (err) {
      if (err) {
        res.status(500).send(err);
      }
    }
  );
});

http.listen(PORT, () => {
  console.log("Server is listening on " + PORT);
});