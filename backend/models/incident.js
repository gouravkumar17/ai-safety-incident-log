const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Incident = sequelize.define('Incident', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  severity: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Low', 'Medium', 'High']]
    }
  },
  reported_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'incidents',
  timestamps: false
});

module.exports = Incident;