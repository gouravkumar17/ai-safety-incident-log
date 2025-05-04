module.exports = {
    up: async (queryInterface) => {
      await queryInterface.bulkInsert('incidents', [
        {
          title: 'Unauthorized data access',
          description: 'AI system accessed user data without proper authorization',
          severity: 'High',
          reported_at: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: 'Bias in hiring algorithm',
          description: 'Recruitment AI showed gender bias in candidate selection',
          severity: 'Medium',
          reported_at: new Date(),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {});
    },
    down: async (queryInterface) => {
      await queryInterface.bulkDelete('incidents', null, {});
    }
  };