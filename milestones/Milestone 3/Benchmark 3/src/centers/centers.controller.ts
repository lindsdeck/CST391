import { Request, Response } from "express";
import * as dao from "./centers.dao";

export const getCenters = async (req: Request, res: Response) => {
  try {
    const data = await dao.getCenters();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const createCenter = async (req: Request, res: Response) => {
  try {
    const result = await dao.createCenter(req.body);
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const getCenterById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const data = await dao.getCenterById(id);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const updateCenter = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await dao.updateCenter(id, req.body);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};

export const deleteCenter = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const result = await dao.deleteCenter(id);

    res.status(200).json({
      message: "Center deleted successfully",
      result: result
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
};