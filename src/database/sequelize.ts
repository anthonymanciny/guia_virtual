import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config() // Carrega as variáveis de ambiente do arquivo .env

const DATABASE_NAME = process.env.DATABASE_NAME
const USER_NAME = process.env.USER_NAME
const PASSWORD = process.env.PASSWORD
const HOST = process.env.HOST
const DIALECT = process.env.DIALECT

const sequelize = new Sequelize(DATABASE_NAME, USER_NAME, PASSWORD, {
    host: HOST,
    dialect: DIALECT,
})

export default sequelize