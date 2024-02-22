module.exports = (sequelize, DataTypes) => {
    const alias = "ProjectSkill";
    const cols ={
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        skill_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
        
    }
    const config= {
        tableName: 'projects'
    }
    const Project = sequelize.define(alias, cols, config)
    return Project;
};
