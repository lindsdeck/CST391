import { execute } from "../services/mysql.connector";

export const getCenters = () => {
  return execute("SELECT * FROM centers", []);
};

export const createCenter = (center: any) => {
  const { name, description, rating, openings, price_per_week } = center;

  return execute(
    "INSERT INTO centers (name, description, rating, openings, price_per_week) VALUES (?, ?, ?, ?, ?)",
    [name, description, rating, openings, price_per_week]
  );
};

export const getCenterById = (id: number) => {
  return execute("SELECT * FROM centers WHERE id = ?", [id]);
};

export const updateCenter = (id: number, center: any) => {
  const { name, description, rating, openings, price_per_week } = center;

  return execute(
    "UPDATE centers SET name = ?, description = ?, rating = ?, openings = ?, price_per_week = ? WHERE id = ?",
    [name, description, rating, openings, price_per_week, id]
  );
};

export const deleteCenter = (id: number) => {
  return execute("DELETE FROM centers WHERE id = ?", [id]);
};