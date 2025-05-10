export default (sequelize, DataTypes) => {
  const Industry = sequelize.define("Industry", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    industry_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Industry name cannot be empty"
        },
        len: {
          args: [1, 255],
          msg: "Industry name must be between 1-255 characters"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      set(value) {
        this.setDataValue('is_active', !!value);
      }
    }
  }, {
    tableName: 'industries',
    timestamps: true, // ✅ Enable this
    underscored: true, // Maps to created_at and updated_at
    hooks: {
      beforeValidate: (industry) => {
        if (typeof industry.is_active === 'number') {
          industry.is_active = Boolean(industry.is_active);
        }
      }
    }
  });

  return Industry;
};
