const { sq } = require("../config/db");
const { DataTypes } = require("sequelize");

const specialPlants = sq.define('special plants', {

    species: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      }
    },
  });

  specialPlants.sync().then(() => {
    console.log("User Model synced");
  });

module.exports = specialPlants;
