import { createConnection } from 'typeorm';
export const connectDB = async () => {
  try {
    await createConnection();
    console.log(`🟢 The database ${process.env.POSTGRES_DB} is connected.`);
  } catch (error) {
    //console.error(`🔴 Unable to connect to the database: ${error}.`);
    console.log(error)
  }
};
