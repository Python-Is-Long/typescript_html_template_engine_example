// src/index.ts
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from 'path';

/*
 * Load up and parse configuration details from
 * the `.env` file to the `process.env`
 * object of Node.js
 */
dotenv.config();

/*
 * Create an Express application and get the
 * value of the PORT environment variable
 * from the `process.env` (if a .env file is available)
 */
const app: Express = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
const port = process.env.PORT || 3000;

/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get("/", (req: Request, res: Response) => {
    // prepare the data to be sent to the view
    let data = {
        title: 'Use HTML Template Engine',
        steps: ['1. Download HTML Template Engine', '2. ???', '3. Profit!']
    }

    // dynamically render the page.ejs file
    res.render('page', { data: data });
});

/* Start the Express app and listen
 for incoming requests on the specified port */
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
