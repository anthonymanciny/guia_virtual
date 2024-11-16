import { Sequelize } from 'sequelize'

const DATABASE_NAME = 'guia_teste'
const USER_NAME = 'root'
const PASSWORD = ''
const HOST = 'localhost'

const sequelize = new Sequelize(DATABASE_NAME, USER_NAME, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
})

export default sequelize
