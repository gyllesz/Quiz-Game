import express from "express";
import axios from "axios";
import { decode } from "html-entities";

const app = express();
const port = 3000;

app.use(express.static("public"));

// Serve questions as JSON for the frontend
app.get("/api/quiz-questions", async (req, res) => {
  try {
    const result = await axios.get("https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple");
    const decodedResults = result.data.results.map((item) => ({
      ...item,
      question: decode(item.question),
      correct_answer: decode(item.correct_answer),
      incorrect_answers: item.incorrect_answers.map(decode),
    }));
    res.json(decodedResults);
  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    res.status(500).send("Failed to fetch quiz questions.");
  }
});

// Render the EJS template
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
