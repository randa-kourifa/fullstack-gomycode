import express from "express";
import {
  adduser,
  deleteuser,
  getallusers,
  updateuser,
} from "../controllers/user.js";
export const router = express.Router();

router.get("/get", getallusers),
  router.post("/add", adduser),
  router.put("/:id", updateuser),
  router.delete("/:id", deleteuser);
export default router;
