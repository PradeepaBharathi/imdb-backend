import asyncHandler from 'express-async-handler'
import Movie from '../model/movieModel.js'

const getMovies = asyncHandler(async (req, res) => {
     try {
       const movies = await Movie.find();
       if (!movies) {
        return res.status(400).json({message:"No data"})
       }
        res.status(200).json(movies);
     } catch (err) {
       console.log(error)
       res.status(500).json({ message: err.message });
     }
})

const addMovie = asyncHandler(async (req, res) => {
    try {

        const { name, yearOfRelease,image,producer, actors } = req.body;
        if (!name || !yearOfRelease || !image || !producer || !actors) {
          return res.status(400).send({ message: "Please fill all details" });
            
        }
      const newMovie = new Movie({
        name,
        image,
        yearOfRelease,
        producer,
        actors,
      });
      const savedMovie = await newMovie.save();
      res.status(201).json(savedMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
})
const editMovie = asyncHandler(async (req, res) => {
  const { name, yearOfRelease,image, producer, actors } = req.body;
  const { id } = req.params;

  try {
    const movie = await Movie.findById(id);
    console.log(movie);

    if (!movie || !id) {
      return res.status(404).json({ message: "Movie not found" });
    }

    movie.name = name;
    movie.yearOfRelease = yearOfRelease;
    movie.image = image;
    movie.producer = producer;
    movie.actors = actors;

    const updatedMovie = await movie.save();

    res.status(200).json(updatedMovie);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Failed to update movie" });
  }
});
const getMovieById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {

    const movie = await Movie.findById(id);
    console.log(movie)
    if (!movie) {
     
      return res.status(404).json({ message: "Movie not found" });
    }

    
    res.status(200).json(movie);
  } catch (error) {
   
    console.error(error);
    res.status(400).json({ message: "Failed to get movie by ID" });
  }
});
export { getMovies, addMovie, editMovie,getMovieById };