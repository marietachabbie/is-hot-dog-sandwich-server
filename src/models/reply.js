"use strict";

const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Reply = sequelize.define("Reply", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'replies',
    timestamps: false,
  });

  return Reply;
};
