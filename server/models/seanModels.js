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

  createVendor: async ({ name, latitude, longitude, bestFilling, price }) => {
    try {
      console.log("QUWERY VALUES", name, latitude, longitude, bestFilling);

      const query = `
        INSERT INTO vendors (name, latitude, longitude, bestFilling, price)
        VALUES ($1, $2, $3, $4, $5)
      `;
      const values = [name, latitude, longitude, bestFilling, price];
      await pool.query(query, values);
      console.log("Vendor added successfully");
    } catch (error) {
      console.error("Error adding vendor:", error);
      throw error;
    }
  },
};
