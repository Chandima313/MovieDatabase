const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const Actor = require('./models/actors');
const director = require('./models/director');
const Genre = require('./models/genres');
const Movie = require('./models/movies');

const actorRoutes = require('./routes/actor');
const directorRoutes = require('./routes/director');
const genreRoutes = require('./routes/genre');
const movieRoutes = require('./routes/movie');

app.use('/api/actors', actorRoutes);
app.use('/api/director', directorRoutes);
app.use('/api/genres', genreRoutes);
app.use('/api/movies', movieRoutes);

const dbURI = 'mongodb+srv://chandimajeewa313:<password>@moviedatabase.nlgtghp.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log(error));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});