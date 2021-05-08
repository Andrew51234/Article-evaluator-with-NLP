// require libraries
const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const app = express();
const dotenv = require("dotenv");

dotenv.config();
app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname);

const API_URL = "https://api.meaningcloud.com/sentiment-2.1";
const API_KEY = process.env.KEY;

app.get('/', function(req, res) {
    //  res.sendFile('dist/index.html');
    res.sendFile(path.resolve('src/client/views/index.html'));
})

//handling the input url
app.post('/add-url', async(req, res) => {
    try {
        const url = req.body.userURL;
        const api_link = `${API_URL}?key=${API_KEY}&url=${url}&lang=en`;
        const response = await axios.get(api_link);

        res.send(
            ({
                score_tag,
                agreement,
                subjectivity,
                confidence,
                irony,
            } = response.data)
        );
        console.log(api_link)
    } catch (exception) {
        console.log(exception.message);
    }
});

app.get('/test', function(req, res) {
    res.send(mockAPIResponse);
});

app.listen(8081, (error) => {
    if (error) throw new Error(error)
    console.log("Server listening on port 8081!");
})