import { Router } from "express";
import { getUsers } from "../controllers/controller.js";

const router  = Router()

router.get('/users', getUsers)


export  default router 