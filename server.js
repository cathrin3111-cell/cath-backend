const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection (direct)
mongoose.connect("mongodb://cathrin3111_db_user:Cath123@ac-ddsbza2-shard-00-00.2afuayx.mongodb.net:27017,ac-ddsbza2-shard-00-01.2afuayx.mongodb.net:27017,ac-ddsbza2-shard-00-02.2afuayx.mongodb.net:27017/portfolioDB?ssl=true&replicaSet=atlas-ctf6ub-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Mongo Error:", err));

// ✅ Schema
const feedbackSchema = new mongoose.Schema({
  name: String,
  message: String
});

// ✅ Model
const Feedback = mongoose.model("Feedback", feedbackSchema);

// ✅ POST API (save data)
app.post("/feedback", async (req, res) => {
  try {
    console.log("DATA RECEIVED:", req.body);

    const newFeedback = new Feedback(req.body);
    await newFeedback.save();

    console.log("SAVED TO DB ✅");

    res.send("Feedback saved successfully");
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).send("Error saving feedback");
  }
});

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// ✅ IMPORTANT (Render PORT fix)
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
