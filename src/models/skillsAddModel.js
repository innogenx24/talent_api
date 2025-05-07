// src/models/skillsAddModel.js
export default (sequelize, DataTypes) => {
    const SkillsAdd = sequelize.define(
      "SkillsAdd",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        job_title: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        job_description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        active_status: {
          type: DataTypes.TINYINT(1),
          defaultValue: 1, // Active by default
        },
        skills: {
          type: DataTypes.JSON,
          allowNull: true, // Array of skills in JSON format
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: "skills_add",
        timestamps: false, // We don't need Sequelize to manage timestamps automatically
      }
    );
  
    return SkillsAdd;
  };
  