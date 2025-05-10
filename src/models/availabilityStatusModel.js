export default (sequelize, DataTypes) => {
    const AvailabilityStatus = sequelize.define(
      "AvailabilityStatus",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        availability_status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        active_status: {
          type: DataTypes.BOOLEAN,
          allowNull: false,
          defaultValue: true,
        },
      },
      {
        tableName: "availability_status",
        timestamps: true, 
        createdAt: "created_at",
        updatedAt: "updated_at",
      }
    );
  
    return AvailabilityStatus;
  };
  