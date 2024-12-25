$(document).ready(function () {
    let questions = []; // To store questions fetched from the API
    const $startScreen = $("#start-screen");
    const $startBtn = $("#start-btn");
    const $quizScreen = $("#quiz-screen");
    const $questionNumberElem = $("#question-number");
    const $questionTextElem = $("#question-text");
    const $choicesContainer = $("#choices-container");
    const $nextBtn = $("#next-btn");
    const $scoreScreen = $("#score-screen");
    const $scoreText = $("#score-text");
    const $retakeBtn = $("#retake-btn");
  
    let currentQuestionIndex = 0;
    let score = 0;
    let answeringAllowed = true;
  
    $startBtn.on("click", startQuiz);
    $nextBtn.on("click", goToNextQuestion);
    $retakeBtn.on("click", retakeQuiz);
  
    // Fetch Questions from the Backend/API
    function fetchQuestions() {
      return $.getJSON("/api/quiz-questions") // Replace with your backend route
        .then((data) => {
          questions = data.map((item) => ({
            question: item.question,
            choices: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5),
            correctAnswer: item.correct_answer,
          }));
        })
        .catch((error) => {
          console.error("Error fetching questions:", error);
          alert("Failed to load questions. Please try again.");
        });
    }
  
    function startQuiz() {
      currentQuestionIndex = 0;
      score = 0;
  
      $startScreen.addClass("hidden");
      $quizScreen.removeClass("hidden");
  
      fetchQuestions().then(() => loadQuestion());
    }
  
    function loadQuestion() {
      answeringAllowed = true;
      clearChoices();
  
      const currentQuestion = questions[currentQuestionIndex];
      $questionNumberElem.text(`Question ${currentQuestionIndex + 1} of ${questions.length}`);
      $questionTextElem.text(currentQuestion.question);
  
      currentQuestion.choices.forEach((choice) => {
        const $choiceDiv = $("<div>")
          .addClass("choice")
          .text(choice)
          .on("click", function () {
            handleChoiceClick(choice);
          });
        $choicesContainer.append($choiceDiv);
      });
    }
  
    function handleChoiceClick(selectedChoice) {
      if (!answeringAllowed) return;
  
      answeringAllowed = false;
  
      const currentQuestion = questions[currentQuestionIndex];
  
      $choicesContainer.children(".choice").each(function () {
        if ($(this).text() === currentQuestion.correctAnswer) {
          $(this).addClass("correct");
        }
        if ($(this).text() === selectedChoice && selectedChoice !== currentQuestion.correctAnswer) {
          $(this).addClass("incorrect");
        }
      });
  
      if (selectedChoice === currentQuestion.correctAnswer) {
        score++;
      }
    }
  
    function clearChoices() {
      $choicesContainer.empty();
    }
  
    function goToNextQuestion() {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        loadQuestion();
      } else {
        endQuiz();
      }
    }
  
    function endQuiz() {
      $quizScreen.addClass("hidden");
      $scoreScreen.removeClass("hidden");
      $scoreText.text(`You scored ${score} out of ${questions.length}.`);
    }
  
    function retakeQuiz() {
      $scoreScreen.addClass("hidden");
      $startScreen.removeClass("hidden");
    }
  });
  