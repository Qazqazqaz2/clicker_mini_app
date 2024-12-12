const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Настройки для подключения к PostgreSQL
const pool = new Pool({
  user: "postgres",
  host: "95.191.14.63",
  database: "postgres",
  password: "762341",
  port: 5432, // стандартный порт для PostgreSQL
});

// Middleware
app.use(cors());
app.use(express.json());

// API для получения последних 5 новостей
app.get("/api/news", async (req, res) => {
    try {
      const { rows } = await pool.query("SELECT content FROM news ORDER BY id DESC LIMIT 5");
  
      // Преобразуем строки в формат [{0: "значение"}]
      const formattedRows = rows.map((row, index) => ({ [index]: row.content }));
  
      res.json(formattedRows);
    } catch (err) {
      console.error("Ошибка при получении новостей:", err);
      res.status(500).send("Ошибка сервера");
    }
  });


// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
