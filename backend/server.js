import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import tasksRouter from "./routes/tasks.js";
import authRouter from "./routes/auth.js";
import { authMiddleware } from "./middleware/auth.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/todo-app")
  .then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur de connexion à MongoDB:", err));

// Routes
app.use("/api/tasks", authMiddleware, tasksRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.json({ message: "Bienvenue sur l'API Todo App!" });
});

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
