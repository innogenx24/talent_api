export default (sequelize, DataTypes) => {
    const RevenueModel = sequelize.define(
      "RevenueModel",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        revenue_model_name: {
          type: DataTypes.STRING(255), // Adjusted length to 255 as per the table schema
          allowNull: false, // revenue_model_name is required
        },
        description: {
          type: DataTypes.TEXT, // Matching the TEXT type as per the schema
          allowNull: true, // description is optional
        },
        active_status: {
          type: DataTypes.TINYINT(1), // Matching the tinyint(1) type for active_status
          defaultValue: 1, // Default value of 1 (active) as in the table
        },
        created_at: {
          type: DataTypes.DATE, // Using DATE instead of TIMESTAMP
          defaultValue: DataTypes.NOW, // Default to the current time
        },
        updated_at: {
          type: DataTypes.DATE, // Using DATE for updated_at
          defaultValue: DataTypes.NOW, // Default to current time on update
        },
      },
      {
        tableName: "revenue_models", // Matching the table name to 'revenue_models'
        timestamps: false, // Since created_at and updated_at are manually handled, we disable automatic timestamps
      }
    );
  
    return RevenueModel;
  };
  