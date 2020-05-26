const Activity = require("../models/activities.model");

module.exports = {
  create(req, res) {
    const activity = new Activity(req.body);

    Activity.findOne({ name: activity.name})
      .then((activity) => {
        if (activity === null) {
          Activity.create(req.body)
            .then((activity) => {
              res.json(activity);
            })
            .catch((err) => {
              res.status(400).json(err);
            });
        }
        else {
          let msg = "Name already exists, please use a different name";
          let err = {
            errors: {
              name: {
                message: msg,
                name: "DuplicateNameError",
                properties: {
                  message: msg,
                  type: "duplicate",
                  path: "name",
                  value: activity.name
                },
                path: "name",
                value: activity.name
              },
            },
            _message: msg,
            message: msg,
            name: "DuplicateNameError",
          };

          // console.log(JSON.stringify(err));
          // conflict status (409) for the duplicate name
          res.status(409).json(err);
        }
      })
      .catch((err) => {
        // catch the error of trying to find this name
        res.status(400).json(err);
      });
  },

  getAll(req, res) {
    Activity.find()
      .then((activities) => {
        // console.log(activities);
        // let tmpActivitys = [...activities];
        // console.log(tmpActivitys);
        // tmpActivitys.sort(compare);
        res.json(activities);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  getOne(req, res) {
    Activity.findById(req.params.id)
      .then((activity) => {
        res.json(activity);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  update(req, res) {
    Activity.findByIdAndUpdate(req.params.id, req.body, {
      runValidators: true,
      new: true,
    })
      .then((updatedActivity) => {
        res.json(updatedActivity);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  delete(req, res) {
    Activity.findByIdAndDelete(req.params.id) 
      .then((activity) => {
        res.json(activity);
      })
      .catch((err) => {
        res.status(400).json(err);
      })
  },

  // compare(a, b) {
  //   // Use toUpperCase() to ignore character casing
  //   const typeA = a.type.toUpperCase();
  //   const typeB = b.type.toUpperCase();

  //   let comparison = 0;
  //   if (typeA > typeB) {
  //     comparison = 1;
  //   } else if (typeA < typeB) {
  //     comparison = -1;
  //   }
  //   return comparison;
  // },

};
