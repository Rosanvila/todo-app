import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  difficulty: {
    type: String,
    enum: ["facile", "moyen", "difficile"],
    default: "moyen",
  },
  experiencePoints: {
    type: Number,
    default: function () {
      switch (this.difficulty) {
        case "facile":
          return 10;
        case "moyen":
          return 20;
        case "difficile":
          return 30;
        default:
          return 20;
      }
    },
  },
  dueDate: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Task", taskSchema);
