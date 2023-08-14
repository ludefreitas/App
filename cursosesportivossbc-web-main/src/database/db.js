const Sequelize = require("sequilize")
const sequilize = new Sequelize("cursosesportivos", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    port: "3308",
})

module.exports = {
    sequelize: sequelize,
    Sequelize: Sequelize, 
}

sequilize
    .authenticate()
    .then(() => {
        console.log("Conexão realizadaa com sucesso ao banco de dados")
    })
    .catch((err) => {
        console.log("Erro ao se conectar com o banco de dados" + err)
    })