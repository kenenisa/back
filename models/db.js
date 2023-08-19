const path = require('path');
if (!global.hasOwnProperty("models")) {
    var Sequelize = require("sequelize"),
        sequelize = null;
    // 
    // const dburl = process.env.DATABASE_URL || 'postgres://jezdakzbbumsam:254194621968cdf485a1ae9ae35b348452c7df387d4d1397d0efb2aae35506a3@ec2-54-225-228-142.compute-1.amazonaws.com:5432/d9i6ku1nvca5mh'
    
    sequelize = new Sequelize({
        dialect: "sqlite",
        storage:'database.sqlite'       
    });

    global.models = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Employee: require(path.join(__dirname, 'employee'))(sequelize, Sequelize.DataTypes),
       };
}
module.exports = global.models;
