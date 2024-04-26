import express from 'express'

import { addMovie, editMovie, getMovieById, getMovies } from '../controllers/movie_controller.js'

const router = express.Router()

router.post("/addMovie", addMovie)
router.get("/allMovie", getMovies)
router.put("/editMovie/:id", editMovie)
router.get("/allMovie/:id", getMovieById)


export default router