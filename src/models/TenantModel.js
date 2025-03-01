export default (sequelize, DataTypes) => {
    const Tenant = sequelize.define('Tenant', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      domain: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      tableName: 'tenants',
      timestamps: true,
    });
  
    Tenant.associate = (models) => {
      Tenant.hasMany(models.User, { foreignKey: 'tenant_id', onDelete: 'CASCADE' });
    };
  
    return Tenant;
  };
  