import express from "express";
import * as controller from "./centers.controller";

console.log("centers routes working");

export const router = express.Router();

router.get("/", controller.getCenters);
router.post("/", controller.createCenter);
router.get("/:id", controller.getCenterById);
router.put("/:id", controller.updateCenter);
router.delete("/:id", controller.deleteCenter);
