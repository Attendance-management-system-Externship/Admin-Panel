import express from "express";
const router = express.Router();

import {createAdmin,loginHandler} from "../controllers/adminController.js";

import { authenticateUser} from "../middlewares/Authenticate.js";
import {authorizeUser} from "../middlewares/Authorize.js";

router.post("/createAdmin", createAdmin);
router.post("/login", loginHandler);


export default router;