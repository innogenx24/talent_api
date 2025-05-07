export default (sequelize, DataTypes) => {
    const OverallStatus = sequelize.define(
        "OverallStatus",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            overall_status: {
                type: DataTypes.STRING(255),
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
        },
        {
            tableName: "overallstatus",
            timestamps: true, // Automatically adds `created_at` and `updated_at` columns
            createdAt: 'created_at',
            updatedAt: 'updated_at',
        }
    );

    return OverallStatus;
};
