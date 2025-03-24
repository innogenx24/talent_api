export default (sequelize, DataTypes) => {
    const CandidateDetails = sequelize.define(
        "CandidateDetails",
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            candidate_id: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
            first_name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            last_name: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            profile_picture: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            resume_file: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            email: {
                type: DataTypes.STRING(255),
                allowNull: true,
                unique: true,
            },
            phone_number: {
                type: DataTypes.STRING(20),
                allowNull: true,
            },
            address: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            education: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            work_experience: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            technical_skills: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            language_skills: {
                type: DataTypes.JSON,
                allowNull: true,
            },
            candidate_status: {
                type: DataTypes.STRING(100),
                allowNull: true,
            },
            portfolio_link: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            linkedin_link: {
                type: DataTypes.STRING(255),
                allowNull: true,
            },
            years_of_experience: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            current_salary: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: true,
            },
            expected_salary: {
                type: DataTypes.DECIMAL(10, 2),
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
            tableName: "candidate_details",
            timestamps: false,
        }
    );

    return CandidateDetails;
};
