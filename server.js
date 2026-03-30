
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ DIRECT CONNECTION (no .env)
mongoose.connect("mongodb://cathrin3111_db_user:Cath123@ac-ddsbza2-shard-00-00.2afuayx.mongodb.net:27017,ac-ddsbza2-shard-00-01.2afuayx.mongodb.net:27017,ac-ddsbza2-shard-00-02.2afuayx.mongodb.net:27017/portfolioDB?ssl=true&replicaSet=atlas-ctf6ub-shard-0&authSource=admin&retryWrites=true&w=majority")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log("Mongo Error:", err));