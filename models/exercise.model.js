module.exports = (sequelize, Sequelize) => {
  const Exercise = sequelize.define(
    "exercise",
    {
      id: {
        type: Sequelize.STRING,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      public: {
        type: Sequelize.BOOLEAN,
      },
      sets: {
        type: Sequelize.INTEGER,
      },
      reps: {
        type: Sequelize.INTEGER,
      },
      rpe: {
        type: Sequelize.INTEGER,
      },
      created_by: {
        type: Sequelize.STRING,
      },
    },
    { timestamps: false }
  );
  return Exercise;
};
