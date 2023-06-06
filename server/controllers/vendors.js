const axios = require("axios");
const models = require("../models");

module.exports = {
  get: (req, res) => {
    models.vendors
      .getAllVendors(req, res)
      .then((dbRes) => {
        res.send(dbRes.rows);
      })
      .catch((err) => {
        console.log("error in CONTROLLER GETALL", err);
      });
  },

  post: (req, res) => {
    try {
      console.log("Inside the POST controller"); // Add console.log statement
      const { name, longitude, latitude, bestFilling } = req.body;

      // Perform necessary operations, such as saving the data to the database
      const result = models.vendors;
      models.vendors
        .createVendor({
          name,
          longitude,
          latitude,
          bestFilling,
        })
        .then(() => console.log("Data saved successfully:", result))
        .then(() => res.sendStatus(200));
      // .then(() => {
      //   return longitude;
      // });
      // res.sendStatus(200);
    } catch (error) {
      console.error("Error in POST controller:", error);
      res.sendStatus(500);
    }
  },
};
