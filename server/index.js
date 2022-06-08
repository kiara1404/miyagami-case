import express from 'express';
import Flickr from 'flickr-sdk';
import 'dotenv/config'
import cors from "cors";



const flickr = new Flickr(process.env.FLICK_API_KEY);
const app = express();
const port = process.env.PORT || 5000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

let searchQuery = 'macro';

// index
app.get('/api', async (req, res) => {

    const response =
        await flickr.photos.search({
            text: searchQuery,
            per_page: 16
        });
    res.send(response.body);
});



// search
app.post("/api", async (req, res) => {
    if (req.body.query) {
        searchQuery = req.body.query;
        const response =

            await flickr.photos
                .search({
                    text: searchQuery,
                    per_page: 1
                });
        res.send(response.body);
    }
});

// server
app.listen(port, () =>
    console.log(`Server is running succesfully👋!`));
