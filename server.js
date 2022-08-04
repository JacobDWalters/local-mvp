import express from "express";
import pg from 'pg';
import dotenv from "dotenv";
import fileUpload from "express-fileupload"

dotenv.config();

const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ...(process.env.NODE_ENV === "production" 
    ? {
        ssl: {
            rejectUnauthorized: false
        }
    }
    : {}),
});

const app = express();
const PORT = process.env.PORT || 4000; 

app.use(express.static("static"));
app.use(express.json());
app.use(fileUpload());

// POST a new business
app.post('/owners', (req, res) => {
    const { name, owner_phone, owner_email } = req.body;
    pool.query(
        `INSERT INTO owners
        (name, owner_phone, owner_email) 
        VALUES ($1, $2, $3)`,
        [name, owner_phone, owner_email]
    ).then(() => {
        res.sendStatus(200);
    });
});

app.post("/business", (req, res) => {
    // console.log(req.body);
    const { name, category, address, description, business_name, business_phone, business_email, business_website } = req.body;
    pool.query(
        `INSERT INTO business
        (name, category, address, description, business_name, business_phone, business_email, business_website) 
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [name, category, address, description, business_name, business_phone, business_email, business_website]
    ).then((str) => {
        // console.log(str.rows[0]);
        res.set('Content-Type', 'text/plain').send(str.rows[0]);
    });
});

app.post('/images', (req, res) => {
    const { name, data } = req.files.pic;
    const { business_name } = req.body;
    pool.query(
        `INSERT INTO images
        (name, img, business_name)
        VALUES ($1, $2, $3)`,
        [name, data, business_name]
    ).then(() => {
        res.sendStatus(200);
    });
});


app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});