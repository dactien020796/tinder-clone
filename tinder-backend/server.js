import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';

import Cards from './dbCard.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connectionUrl = 'mongodb+srv://admin:fhLiCzHvQiCDJXo2@cluster0.hbbxn.mongodb.net/tinder_db?retryWrites=true&w=majority'

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => console.log("Connected to MongoDB"));

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello world'));

app.get('/tinder/cards', (req, res) => {
    Cards.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    });
});

app.post('/tinder/cards', (req, res) => {
    const payload = req.body;
    Cards.create(payload, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));