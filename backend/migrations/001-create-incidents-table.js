module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('incidents', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false
        },
        description: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        severity: {
          type: Sequelize.STRING,
          allowNull: false
        },
        reported_at: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('incidents');
    }
  };