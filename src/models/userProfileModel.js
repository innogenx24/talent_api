export default (sequelize, DataTypes) => {
    const UserProfile = sequelize.define(
      "UserProfile",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        fullname: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
          unique: true,
        },
        company_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        phone_number: {
          type: DataTypes.STRING(15),
          allowNull: false,
        },
        interest: {
          type: DataTypes.ENUM("AR", "VR"),
          allowNull: false,
        },
        experience: {
          type: DataTypes.TEXT,
          allowNull: true,
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
        tableName: "user_profiles",
        timestamps: false, // Since we manually handle created_at and updated_at
      }
    );
  
    return UserProfile;
  };
  