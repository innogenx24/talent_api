export default (sequelize, DataTypes) => {
  const JobTitle = sequelize.define(
    "JobTitle",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      job_title: {
        type: DataTypes.STRING(255), // Adjusted length to 255 as per the table schema
        allowNull: false, // job_title is required
      },
      job_description: {
        type: DataTypes.TEXT, // Matching the `TEXT` type as per the schema
        allowNull: true, // job_description is optional
      },
      active_status: {
        type: DataTypes.TINYINT(1), // Matching the tinyint(1) type for active_status
        defaultValue: 1, // Default value of 1 (active) as in the table
      },
      created_at: {
        type: DataTypes.DATE, // Using DATE instead of TIMESTAMP
        defaultValue: DataTypes.NOW, // Default to the current time
      },
    },
    {
      tableName: "jobs", // Matching the table name to 'jobs'
      timestamps: false, // Since created_at is manually handled, we disable automatic timestamps
    }
  );

  return JobTitle;
};
