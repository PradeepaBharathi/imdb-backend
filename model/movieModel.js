import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
   
  },
  yearOfRelease: {
    type: Number,
    required: true,
  },
  producer: {
    type: String,
    required: true,
  },
  actors: [
    {
      type: String,
    },
  ],
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
