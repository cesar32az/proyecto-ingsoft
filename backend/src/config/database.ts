import { createConnection } from 'typeorm';
import * as ormconfig from './ormconfig';
export const connectDB = async () => {
  try {
    await createConnection(ormconfig);
    console.log(`🟢 The database ${process.env.POSTGRES_DB} is connected.`);
  } catch (error) {
    console.error(`🔴 Unable to connect to the database: ${error}.`);
  }
};
