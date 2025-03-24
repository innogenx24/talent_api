export default (sequelize, DataTypes) => {
    const Appointment = sequelize.define(
      "Appointment",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        user_email: {  // Updated to match MySQL column name
          type: DataTypes.STRING(255),
          allowNull: false,
          validate: {
            isEmail: true,
          },
        },
        user_name: {  // Updated to match MySQL column name
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        appointment_date: {
          type: DataTypes.DATEONLY,
          allowNull: false,
        },
        appointment_time: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
      },
      {
        tableName: "appointments",
        timestamps: true,  // Enables createdAt and updatedAt
        createdAt: "created_at",  // Maps to MySQL `created_at`
        updatedAt: "updated_at",  // Maps to MySQL `updated_at`
      }
    );

    return Appointment;
};
