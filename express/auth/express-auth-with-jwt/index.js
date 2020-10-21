import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import InitiateMongo from './db.js'
import cors from 'cors'
import morgan from 'morgan'
import user from './routes/user'

dotenv.config()
const opt = {debug: true}

// Initiate Mongo 
InitiateMongo()

const app = express();

// PORT
const PORT = process.env.PORT || 3001

// Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('combined'));

 
app.get("/api", (req, res) => {
    res.json({ message: "API Working" });
  });
  
app.use("/api/user", user)

  app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
  });
  