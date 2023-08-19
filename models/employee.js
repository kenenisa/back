module.exports = function (sequelize, DataTypes) {
    return sequelize.define("Employee", {
        empId : {
            type: DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        FirstName: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        LastName: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        Sex: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        Skill: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        SkillType: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        School: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        SchoolAdd: {
            type: DataTypes.STRING,
            allowNull:false,
        },
        SkillLevel: {
            type: DataTypes.INTEGER,
            allowNull:false,
        },
        
    })
}

