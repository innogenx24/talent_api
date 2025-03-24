export default (sequelize, DataTypes) => {
    const ResumeBank = sequelize.define(
        "ResumeBank",
    
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
              },
            candidate_id: {
                type: DataTypes.STRING(50),
                allowNull: false,
                primaryKey: true,
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

            // Address stored as JSON
            address: {
                type: DataTypes.JSON,
                allowNull: true,
            },

            // Other Information
            source: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            status: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },

            // Work Experience stored as JSON
            work_experience: {
                type: DataTypes.JSON,
                allowNull: true,
            },

            // Technical Skills stored as JSON
            technical_skills: {
                type: DataTypes.JSON,
                allowNull: true,
            },

            // Professional Information
            job_title: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            total_experience: {
                type: DataTypes.DECIMAL(3, 1),
                allowNull: true,
            },

            // Portfolio & Social Links
            portfolio_link: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            linkedin_link: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },

            // Resume & Notes
            resume_file: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            notes: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
        },
        {
            tableName: "resume_bank",
            timestamps: false,
        }
    );

    return ResumeBank;
};
