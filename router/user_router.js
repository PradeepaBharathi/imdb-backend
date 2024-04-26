import express from "express";

import {
  allUsers,
  authUser,
  getAllRegisteredUsers,
  registerUser,
} from "../controllers/user_controller.js";

const router = express.Router();

router.post("/register", registerUser);
router.get("/all",  allUsers);
router.get("/allUser",  getAllRegisteredUsers);
router.post("/login", authUser);

export default router;
