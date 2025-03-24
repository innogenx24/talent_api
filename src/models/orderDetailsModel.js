export default (sequelize, DataTypes) => {
    const OrderDetails = sequelize.define(
      "OrderDetails",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        order_id: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true,
        },
        order_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        quotation_id: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        client_id: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        job_descriptions: {
          type: DataTypes.JSON,
          allowNull: false,
        },
        start_date: {
          type: DataTypes.DATE,
        },
        end_date: {
          type: DataTypes.DATE,
        },
        company_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        contact_person: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        mail_id: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        phone_number: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        executive: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        total: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        address_line1: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        landmark: {
          type: DataTypes.TEXT,
        },
        pincode: {
          type: DataTypes.STRING(10),
          allowNull: false,
        },
        country: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        state: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        city: {
          type: DataTypes.STRING(100),
          allowNull: false,
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
        tableName: "order_details",
        timestamps: false,
      }
    );
  
    return OrderDetails;
  };
  