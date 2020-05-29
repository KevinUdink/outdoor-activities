const crypto = require("crypto");
const path = require("path");
const mongoose = require("mongoose");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");


module.exports = (db_conn, db_name) => {
  // const mongoURI = `mongodb://localhost/${db_name}`;

  // connection
  // const conn = mongoose.createConnection(mongoURI, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // });

  // init gridfs
  let gfs;
  db_conn.once("open", () => {
    // init stream
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
      bucketName: "uploads"
    });
    console.log("GFS connection successful")
  });

  // Storage - where we will store the file streamed data
  const storage = new GridFsStorage({
    url: `mongodb://localhost/${db_name}`,
    file: (req, file) => {
      // create random filename for this file upload to prevent name collisions
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          const filename = buf.toString("hex") + path.extname(file.originalname);
          const fileInfo = {
            filename: filename,
            bucketName: "uploads"
          };
          resolve(fileInfo);
        });
      });
    }
  });

  const upload = multer({
    storage
  });
}