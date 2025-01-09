const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect("mongodb://localhost:27017/waterConservation")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define Schema and Model
const inputSchema = new mongoose.Schema({
  input1: { type: Number, required: true },
  input2: { type: Number, required: true },
  input3: { type: Number, required: true },
  average: { type: Number, required: true },
});

const Input = mongoose.model("Input", inputSchema);

// Routes
app.post("/add", async (req, res) => {
  const { input1, input2, input3 } = req.body;
  const average = (input1 + input2 + input3) / 3;

  try {
    const newInput = new Input({ input1, input2, input3, average });
    await newInput.save();
    res.status(201).json({ message: "Data saved successfully", data: newInput });
  } catch (err) {
    res.status(500).json({ message: "Error saving data", error: err });
  }
});

app.get("/all", async (req, res) => {
  try {
    const data = await Input.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching data", error: err });
  }
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
