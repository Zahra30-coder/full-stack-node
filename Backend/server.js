//import express from 'express';
const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(express.json()); // ✅ Enables JSON body parsing

//See errors directly in your terminal
app.use((req, res, next) => {
  console.log("Incoming:", req.method, req.url);
  console.log("Body:", req.body); // 👀 This will show undefined if express.json() is missing
  next();
});

app.use(cors());

app.get('/', (req,res) =>{
    res.send('Server is ready');
})

// ✅ Declare movies array globally so all routes can use it
const movies = [
  {
    id: "1",
    title: "Inception",
    director: "Christopher Nolan",
    release_date: "2010-05-16",
  },
  {
    id: "2",
    title: "The Irishman",
    director: "Martin Scorsese",
    release_date: "2013-10-16",
  },
  {
    id: "3",
    title: "Twilight",
    director: "Martin Scorsese",
    release_date: "2013-10-16",
  },
  {
    id: "4",
    title: "The Irishman",
    director: "Martin Scorsese",
    release_date: "2013-10-16",
  },
];


// API routes
app.get("/api/movies", (req, res) => {
  res.send(movies);
});

//************************************     ADDING/POSTING A NEW MOVIEapp.post("/api/movies", (req, res) => {
app.post("/api/movies", (req, res) => {
  const newMovie = req.body;

  if (!newMovie.title || !newMovie.director || !newMovie.release_date) {
    return res.status(400).json({ error: "Missing movie data" });
  }

  const movieWithId = {
    ...newMovie,
    id: (movies.length + 1).toString() // generate ID here
  };

  movies.push(movieWithId);
  res.status(201).json({ message: "Movie added", movie: movieWithId });
});



//************************************      DELETE WORKING
app.delete("/api/movies/:id", (req, res) => {
  const id = req.params.id;
  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Movie not found" });
  }

  movies.splice(index, 1);
  res.json({ message: "Movie deleted" });
});

// Start the server
app.listen(port, () => {
    console.log(`Serve at http://localhost: ${port}`)
});

//In package.json file
//"scripts":{
//"start": "node server.js"
//}
