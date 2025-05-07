// src/models/interviewStatusModel.js
export default (sequelize, DataTypes) => {
    const InterviewStatus = sequelize.define(
      "InterviewStatus",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        status_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
          unique: true, // Ensures uniqueness
        },
        job_description: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        control: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        active_status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        created_at: {
          type: DataTypes.DATE, // Changed from TIMESTAMP to DATE
          defaultValue: DataTypes.NOW,
        },
        updated_at: {
          type: DataTypes.DATE, // Changed from TIMESTAMP to DATE
          defaultValue: DataTypes.NOW,
          onUpdate: DataTypes.NOW,
        },
      },
      {
        tableName: "interview_status",
        timestamps: false, // We are using custom timestamps
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  
    return InterviewStatus;
  };
  