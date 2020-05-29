const port = 8000;
const db_name = "outdoor-activities";
const express = require("express");
const cors = require("cors");

var db_conn = require("./config/mongoose.config")(db_name);
// const mongoose = require("mongoose");
// const db_conn = mongoose
//   .createConnection(`mongodb://localhost/${db_name}`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   });
  // .then(() => {
  //   console.log(`Successfully connected to DB: ${db_name}`);      
  // })
  // .catch((err) => {
  //   console.log("Error connecting to the DB:", err);
  // });


// require("./config/gridfs.config")(db_conn, db_name);
// const crypto = require("crypto");
// const path = require("path");
// // const mongoose = require("mongoose");
// const multer = require("multer");
// const GridFsStorage = require("multer-gridfs-storage");
// let gfs;
// db_conn.once("open", () => {
//   // init stream
//   gfs = new mongoose.mongo.GridFSBucket(db_conn.db, {
//     bucketName: "uploads",
//     useUnifiedTopology: true
//   });
//   console.log("GFS connection successful")
// });


// // Storage - where we will store the file streamed data
// const storage = new GridFsStorage({
//   url: `mongodb://localhost/${db_name}`,
//   file: (req, file) => {
//     // create random filename for this file upload to prevent name collisions
//     return new Promise((resolve, reject) => {
//       crypto.randomBytes(16, (err, buf) => {
//         if (err) {
//           return reject(err);
//         }
//         const filename = buf.toString("hex") + path.extname(file.originalname);
//         const fileInfo = {
//           filename: filename,
//           bucketName: "uploads"
//         };
//         resolve(fileInfo);
//       });
//     });
//   }
// });

// const upload = multer({
//   storage
// });

const app = express();
app.use(cors());
app.use(express.json());

require("./routes/activities.route")(app);
// const activitiesController = require("../controllers/activities.controller");
// app.get("/api/activities", activitiesController.getAll);
// app.get("/api/activities/:id", activitiesController.getOne);
// app.post("/api/activities", activitiesController.create);
// app.put("/api/activities/:id", activitiesController.update);
// app.delete("/api/activities/:id", activitiesController.delete);

app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});
