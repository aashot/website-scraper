require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const pageRoutes = require('./api/v1/routes/page.routes');

const app = express();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

// define routes
app.use('/api/v1', pageRoutes);

const PORT = process.env.PORT|| 4000;

app.listen(PORT, () => {
  console.log(`Server started, listening on: ${PORT}`);
})

// const scraperController = require('./controllers/pageController');

// scraperController()