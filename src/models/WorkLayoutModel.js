export default (sequelize, DataTypes) => {
    const WorkLayout = sequelize.define(
      "WorkLayout",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        work_layout: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        active_status: {
          type: DataTypes.BOOLEAN,
          defaultValue: true,
        },
      },
      {
        tableName: "work_layouts",
        timestamps: true,
        underscored: true,
      }
    );
  
    return WorkLayout;
  };
  