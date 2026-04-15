import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.MY_SQL_DB_HOST,
  user: process.env.MY_SQL_DB_USER,
  password: process.env.MY_SQL_DB_PASSWORD,
  database: process.env.MY_SQL_DB_DATABASE,
  port: Number(process.env.MY_SQL_DB_PORT) || 3306,
  connectionLimit: 10
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error("DB connection failed:", err);
  } else {
    console.log("Connected to MySQL!");
    connection.release();
  }
});

export const execute = (query: string, params: any[]) => {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (err, results) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};