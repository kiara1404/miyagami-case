import express from 'express';
import Flickr from 'flickr-sdk';
import 'dotenv/config'



const flickr = new Flickr('c274e2f7d9f965e5f625fb9aa45d02a8')
const app = express();
const port = process.env.PORT || 5000
import cors from "cors";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// index
app.get('/api', async (req, res) => {

    try {
        const response = await flickr.photos.search({
            text: "macro",
            per_page: 16
        });
        res.send(response.body)
        //  console.log(response.body.photos.photo)
    } catch (err) {
        console.log(err);
    }
});

// search
app.post("/api", async (req, res) => {
    console.log(req.body.query)
    if (req.body.query !== '') {
        const response =
            await flickr.photos
                .search({
                    text: req.body.query,
                    per_page: 16
                });
        res.send(response.body)
       // console.log(response.body.photos.photo)

    } else {
        const response =
            await flickr.photos
                .search({
                    text: 'macro',
                    per_page: 16
                });
        res.send(response.body)
       // console.log(response.body.photos.photo)

    }





});

// server
app.listen(port, () =>
    console.log(`Server is running succesfully👋!`),
);
