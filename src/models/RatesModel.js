export default (sequelize, DataTypes) => {
    const RateType = sequelize.define(
        "RateType",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            rate_type: {
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
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
        },
        {
            tableName: "RateTypes",
            timestamps: false, // We're handling timestamps manually
        }
    );

    // Hook to update the `updated_at` field manually before update
    RateType.beforeUpdate((rateType, options) => {
        rateType.updated_at = new Date();
    });

    return RateType;
};
