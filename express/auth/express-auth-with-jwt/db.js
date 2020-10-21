import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const DB = process.env.DATABASE_URL;

const InitiateMongo = () => {
  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((client) => {
      console.log(`${client} connected to database`);
    })
    .catch((error) => console.error(error));

  const db = mongoose.connection;
  return db;
};

export default InitiateMongo;
