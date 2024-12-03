import { Sequelize } from 'sequelize';
import * as config from './config.json'; 

const env = process.env.NODE_ENV || 'development';
const dbConfig = (config as any)[env];

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: dbConfig.logging || false, 
  }
);

// Export the Sequelize instance
export default sequelize;
