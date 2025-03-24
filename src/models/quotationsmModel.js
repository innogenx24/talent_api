export default (sequelize, DataTypes) => {
    const Quotation = sequelize.define(
      "Quotation",
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        quotation_id: {
          type: DataTypes.STRING(50),
          allowNull: false,
          unique: true,
        },
        quotation_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        company_id: {
          type: DataTypes.STRING(50),
          allowNull: false,
        },
        project_type: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        procurement_start_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        procurement_end_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        description: {
          type: DataTypes.TEXT,
        },
        client_company: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        client_name: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        phone_number: {
          type: DataTypes.STRING(20),
          allowNull: false,
        },
        email: {
          type: DataTypes.STRING(255),
          allowNull: false,
        },
        job_details: {
          type: DataTypes.JSON, 
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
        tableName: "quotations",
        timestamps: false,
      }
    );
  
    return Quotation;
  };
  