export default (sequelize, DataTypes) => {
  const LanguageProficiency = sequelize.define(
      "LanguageProficiency",
      {
          id: {
              type: DataTypes.INTEGER,
              autoIncrement: true,
              primaryKey: true,
          },
          language: {
              type: DataTypes.STRING(100),
              allowNull: false,
          },
          proficiency_level: {
              type: DataTypes.STRING(100),
              allowNull: false,
          },
          description: {
              type: DataTypes.TEXT,
              allowNull: true,
          },
          control: {
              type: DataTypes.STRING(50),
              allowNull: true,
          },
          active_status: {
              type: DataTypes.BOOLEAN,
              allowNull: false,
              defaultValue: true,
          },
      },
      {
          tableName: "language_proficiency",
          timestamps: true,
          createdAt: 'created_at',
          updatedAt: 'updated_at',
          indexes: [
              {
                  unique: true,
                  fields: ['language', 'proficiency_level'],
                  name: 'uc_language_proficiency',
              },
          ],
      }
  );

  return LanguageProficiency;
};
