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
        allowNull: true,
        validate: {
          len: {
            args: [0, 65535],
            msg: "Description too long"
          }
        }
      },
      is_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        set(value) {
          this.setDataValue('is_active', !!value);
        }
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'), // Default value as the current timestamp
        get() {
          const value = this.getDataValue('created_at');
          return value ? value.toISOString() : null;
        }
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.fn('NOW'), // Default value as the current timestamp
        onUpdate: sequelize.fn('NOW'), // Automatically update on every modification
        get() {
          const value = this.getDataValue('updated_at');
          return value ? value.toISOString() : null;
        }
      }
    }, {
      tableName: 'industries',
      timestamps: false, // Disable automatic timestamps since we're managing them manually
      underscored: true,
      hooks: {
        beforeValidate: (industry) => {
          // Ensure is_active is boolean
          if (typeof industry.is_active === 'number') {
            industry.is_active = Boolean(industry.is_active);
          }
        }
      },
      // Format JSON output
      toJSON: {
        virtuals: false,
        transform: (doc, ret) => {
          ret.created_at = ret.created_at ? new Date(ret.created_at).toISOString() : null;
          ret.updated_at = ret.updated_at ? new Date(ret.updated_at).toISOString() : null;
          return ret;
        }
      }
    });
  
    return Industry;
  };
  