# Quiz Game
This repository contains a simple quiz game that fetches questions from an external API and presents them to the user. The game is built using Node.js with Express.js, EJS for templating, and jQuery for frontend interactivity.

# About
This is my **first-ever API project**, and while I didn’t fully commit to polishing it, I’m using this as a practice opportunity to learn and improve my skills. There are a lot of bugs and rough edges, but I’m proud of the progress I’ve made so far. Feel free to explore the project and share any feedback!

# Features
- Fetches trivia questions dynamically from Open Trivia Database.
- Interactive user interface with question navigation and scoring.
- Fully responsive design styled with CSS.

# Prerequisites
Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/en)

# Installation
1. Clone the repository:
```
git clone https://github.com/your-username/quiz-game.git
cd quiz-game
```
2. Install dependencies:
```
npm i
```
# Running the Application
1. Start the server:
```
nodemon index.js
```
2. Open your browser and navigate to:
```
http://localhost:3000
```

# Usage
- Click **Start Quiz** to begin the game.
- Answer the questions by selecting a choice.
- Navigate through questions using the **Next Question** button.
- View your score after completing the quiz.
- Retake the quiz using the **Retake Quiz** button

# Known Issues
- You may need to wait a few seconds for the first question.
- There may be bugs or unexpected behavior in certain scenarios.
- Some features are incomplete or require refinement.

# Dependencies
The project uses the following dependencies:
- [Express.js](https://expressjs.com) - Web framework for Node.js
- [Axios](https://axios-http.com) - HTTP client for fetching questions
- [html-entities](https://www.npmjs.com/package/html-entities) - Decoding HTML entities in questions

# Acknowledgments
- Trivia questions sourced from [Open Trivia Database](https://opentdb.com).

# Contributing
Feel free to fork the repository and submit pull requests for improvements or bug fixes.
