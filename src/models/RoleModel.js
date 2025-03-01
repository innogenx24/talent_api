export default (sequelize, DataTypes) => {
    const Role = sequelize.define('Role', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'roles',
      timestamps: true,
    });
  
    Role.associate = (models) => {
      Role.hasMany(models.User, { foreignKey: 'role_id', onDelete: 'SET NULL' });
    };
  
    return Role;
  };
  