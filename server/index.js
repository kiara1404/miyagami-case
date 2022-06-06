import express from 'express';
import Flickr from 'flickr-sdk';
import 'dotenv';


const flickr = new Flickr('c274e2f7d9f965e5f625fb9aa45d02a8')
const app = express();
const port = process.env.PORT || 5000



app.get('/api', async (req, res) => {

    try {
        const response = await flickr.photos.search({
            text: "flower",
            per_page: 16
        });
        res.json(response.body)
        console.log(response.body.photos.photo)
    } catch (err) {
        console.log(err);
    }
});
// server
app.listen(port, () =>
    console.log(`Server is running succesfully👋!`),
);
