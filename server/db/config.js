import dotEnv from 'dotenv';

dotEnv.config();

const databaseConfig = {};


databaseConfig.development = {
  connectionString: 'postgresql://postgres:123@localhost:5433/postgres',
};


export default databaseConfig;
