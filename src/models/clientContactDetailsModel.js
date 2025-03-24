export default (sequelize, DataTypes) => {
    const ClientContactDetails = sequelize.define(
        "ClientContactDetails",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            client_id: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            industry: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            company_name: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            first_name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: false,
                unique: true,
            },
            phone_number: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            pincode: {
                type: DataTypes.STRING(10),
                allowNull: true,
            },
            country: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            state: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            city: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            street: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            landmark: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            source: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            parent_client: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            fax: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            website: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            active_status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
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
            tableName: "client_contact_details",
            timestamps: false,
        }
    );

    return ClientContactDetails;
};
