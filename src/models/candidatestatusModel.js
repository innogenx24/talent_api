export default (sequelize, DataTypes) => {
    const CandidateStatus = sequelize.define(
      "CandidateStatus",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        status: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
        },
        active_status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        updatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
      },
      {
        tableName: "candidate_status",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updatedAt", // Match your DB column
      }
    );
  
    return CandidateStatus;
  };
  