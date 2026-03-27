import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import sqlite3 from "sqlite3";

// Initialize SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) console.error('Database opening error: ', err);
  else console.log('Connected to SQLite database.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS distributors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    phone TEXT,
    city TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/distributors", (req, res) => {
    const { firstName, lastName, email, phone, city } = req.body;
    db.run(
      `INSERT INTO distributors (firstName, lastName, email, phone, city) VALUES (?, ?, ?, ?, ?)`,
      [firstName, lastName, email, phone, city],
      function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, success: true });
      }
    );
  });

  app.post("/api/subscribers", (req, res) => {
    const { email } = req.body;
    db.run(
      `INSERT INTO subscribers (email) VALUES (?)`,
      [email],
      function(err) {
        if (err) {
          if (err.message.includes('UNIQUE')) {
            return res.status(400).json({ error: 'Email already subscribed' });
          }
          return res.status(500).json({ error: err.message });
        }
        res.json({ id: this.lastID, success: true });
      }
    );
  });

  app.get("/api/entries", (req, res) => {
    db.all("SELECT * FROM distributors ORDER BY createdAt DESC", [], (err, distributors) => {
      if (err) return res.status(500).json({ error: err.message });
      db.all("SELECT * FROM subscribers ORDER BY createdAt DESC", [], (err, subscribers) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ distributors, subscribers });
      });
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from dist in production
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
