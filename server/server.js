const port = 8000;
const db_name = "outdoor-activities";
const express = require("express");
const cors = require("cors");

require("./config/mongoose.config")(db_name);

const app = express();
app.use(cors());
app.use(express.json());

require("./routes/activities.route")(app);

app.listen(port, () => {
  console.log(`Listening for requests on port ${port}`);
});
