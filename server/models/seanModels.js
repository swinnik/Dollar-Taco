const pool = require("../db/db");

module.exports = {
  getAllVendors: async () => {
    try {
      const query = `
        SELECT * FROM vendors;
      `;
      const result = await pool.query(query);
      return result;
    } catch (error) {
      console.error("Error retrieving vendors:", error);
      throw error;
    }
  },

  createVender: async ({ name, latitude, longitude, bestFilling }) => {
    try {
      console.log("QUWERY VALUES", name, latitude, longitude, bestFilling);

      const query = `
        INSERT INTO vendors (name, latitude, longitude, bestFilling)
        VALUES (${name}, ${latitude}, ${longitude}, ${bestFilling})
      `;
      // const values = [name, latitude, longitude, bestFilling];
      await pool.query(query);
      console.log("Vender added successfully");
    } catch (error) {
      console.error("Error adding vender:", error);
      throw error;
    }
  },
};
