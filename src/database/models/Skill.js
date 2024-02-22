module.exports = (sequelize, DataTypes) => {
    const alias = "Skill";
    const cols ={
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.TEXT
        }
    }
    const config= {
        tableName: 'skilles'
    }
    const Skill = sequelize.define(alias, cols, config)
    return Skill;
};
