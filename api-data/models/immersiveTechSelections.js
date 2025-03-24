export default (sequelize, DataTypes) => {
    const ImmersiveTechSelection = sequelize.define(
        "ImmersiveTechSelection",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            selected_options: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            product_details: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            selected_goals: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            requirements: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            selected_platforms: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            compliance: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false,
                validate: {
                    isEmail: true,
                },
            },
            fullname: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
        },
        {
            tableName: "immersive_tech_selections",
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );

    return ImmersiveTechSelection;
};
