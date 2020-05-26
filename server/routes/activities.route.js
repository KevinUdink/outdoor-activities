const activitiesController = require("../controllers/activities.controller");

module.exports = (app) => {
  app.get("/api/activities", activitiesController.getAll);
  app.get("/api/activities/:id", activitiesController.getOne);
  app.post("/api/activities", activitiesController.create);
  app.put("/api/activities/:id", activitiesController.update);
  app.delete("/api/activities/:id", activitiesController.delete);
};
