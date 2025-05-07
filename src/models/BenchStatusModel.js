export default (sequelize, DataTypes) => {
    const BenchStatus = sequelize.define(
      "BenchStatus",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        employee_name: {
          type: DataTypes.STRING,
          allowNull: false, // Make sure it's required, or set it to `true` if optional
        },
        status: {
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
        tableName: "bench_status",
        timestamps: false,
        underscored: true,
      }
    );
  
    return BenchStatus;
  };
  