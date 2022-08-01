import express from "express";
import pg from 'pg';
import dotenv from "dotenv";

dotenv.config();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

const app = express();
const PORT = process.env.PORT || 4000; 

app.use(express.static("static"));
app.use(express.json());




app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});