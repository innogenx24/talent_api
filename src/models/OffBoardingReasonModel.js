export default (sequelize, DataTypes) => {
    const OffBoardingReason = sequelize.define(
      "OffBoardingReason",
      {
        ReasonID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        ReasonName: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        Description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        IsActive: {
          type: DataTypes.TINYINT(1),
          defaultValue: 1, // Active by default
        },
        CreatedDate: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
        },
        ModifiedDate: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
          onUpdate: DataTypes.NOW, // Automatically update on modification
        },
      },
      {
        tableName: "OffBoardingReason", // Explicit table name
        timestamps: false, // Disable automatic timestamp management
      }
    );
  
    return OffBoardingReason;
  };
  