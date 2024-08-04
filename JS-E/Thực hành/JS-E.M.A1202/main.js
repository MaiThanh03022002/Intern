class Question {
    constructor(questionText, answers, correctAnswer, multi = false) {
      this.questionText = questionText;
      this.answers = answers;
      this.correctAnswer = correctAnswer;
      this.multi = multi;
    }
  }
  class Quiz {
    constructor(questions) {
      this.questions = questions.map(q => new Question(q.question, q.answers, q.correctAnswer, q.multi));
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.userAnswers = {};
    }
  
    getCurrentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    }
  
    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    }
  
    submitAnswer(answer) {
      const correctAnswer = this.getCurrentQuestion().correctAnswer;
      if (this.getCurrentQuestion().multi) {
        // Multi-choice logic
        const userAnswers = this.userAnswers[this.currentQuestionIndex] || [];
        if (userAnswers.includes(answer)) {
          userAnswers = userAnswers.filter(a => a !== answer);
        } else {
          userAnswers.push(answer);
        }
        this.userAnswers[this.currentQuestionIndex] = userAnswers;
      } else {
        if (answer === correctAnswer) {
          this.score++;
        }
      }
    }
  
    calculateScore() {
      let totalScore = 0;
      this.questions.forEach((q, index) => {
        if (q.multi) {
          const correctAnswers = q.correctAnswer.split(','); 
          const userAnswers = this.userAnswers[index] || [];
          if (correctAnswers.every(answer => userAnswers.includes(answer)) &&
              userAnswers.every(answer => correctAnswers.includes(answer))) {
            totalScore++;
          }
        } else {
          if (this.userAnswers[index] === q.correctAnswer) {
            totalScore++;
          }
        }
      });
      return totalScore;
    }
  
    isLastQuestion() {
      return this.currentQuestionIndex === this.questions.length - 1;
    }
  
    isFirstQuestion() {
      return this.currentQuestionIndex === 0;
    }
  
    getScore() {
      return this.score;
    }
  }
  class QuizUI {
    constructor(quiz) {
      this.quiz = quiz;
      this.questionContainer = document.querySelector('.question-container');
      this.buttonGroup = document.querySelector('.button-group');
      this.scoreDisplay = document.querySelector('.score-display');
  
      this.updateUI();
      this.bindEvents();
    }
  
    updateUI() {
      const question = this.quiz.getCurrentQuestion();
      this.questionContainer.querySelector('.question').textContent = question.questionText;
      
      const choicesContainer = this.questionContainer.querySelector('.choices');
      choicesContainer.innerHTML = ''; 
      
      Object.entries(question.answers).forEach(([key, value]) => {
        const choiceElement = document.createElement('input');
        choiceElement.type = question.multi ? 'checkbox' : 'radio'; 
        choiceElement.className = 'choice';
        choiceElement.dataset.choiceValue = key;
  
        const labelElement = document.createElement('label');
        labelElement.textContent = value;
        labelElement.prepend(choiceElement);
        
        choicesContainer.appendChild(labelElement);
      });
  
      this.updateButtons();
    }
  
    updateButtons() {
      const prevButton = this.buttonGroup.querySelector('.prev');
      const nextButton = this.buttonGroup.querySelector('.next');
      const submitButton = this.buttonGroup.querySelector('.submit');
  
      prevButton.style.display = this.quiz.isFirstQuestion() ? 'none' : 'inline-block';
      nextButton.style.display = this.quiz.isLastQuestion() ? 'none' : 'inline-block';
      submitButton.style.display = this.quiz.isLastQuestion() ? 'inline-block' : 'none';
    }
  
    bindEvents() {
      this.buttonGroup.querySelector('.prev').addEventListener('click', () => {
        this.quiz.previousQuestion();
        this.updateUI();
      });
  
      this.buttonGroup.querySelector('.next').addEventListener('click', () => {
        this.quiz.nextQuestion();
        this.updateUI();
      });
  
      this.buttonGroup.querySelector('.submit').addEventListener('click', () => {
        this.displayScore();
      });
  
      this.questionContainer.querySelector('.choices').addEventListener('change', (event) => {
        if (event.target.classList.contains('choice')) {
          const selectedChoice = event.target.dataset.choiceValue;
          this.quiz.submitAnswer(selectedChoice);
        }
      });
    }
  
    displayScore() {
      const totalScore = this.quiz.calculateScore();
      this.scoreDisplay.textContent = `Your score: ${totalScore}`;
    }
  }
  
  const myQuestions = [
    {
      question: 'Javascript is _________ language.',
      answers: {
        a: 'Programming',
        b: 'Application',
        c: 'None of These',
        d: 'Scripting'
      },
      multi: false,
      correctAnswer: 'd'
    },
    {
      question: 'Which of the following is a valid type of function javascript supports?',
      answers: {
        a: 'named function',
        b: 'anonymous function',
        c: 'both of the above',
        d: 'none of the above'
      },
      multi: false,
      correctAnswer: 'c'
    },
    {
      question: 'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
      answers: {
        a: 'getIndex()',
        b: 'location()',
        c: 'indexOf()',
        d: 'getLocation()'
      },
      multi: false,
      correctAnswer: 'c'
    },
    {
      question: 'Which one of the following is valid data type of JavaScript',
      answers: {
        a: 'number',
        b: 'void',
        c: 'boolean',
        d: 'nothing'
      },
      multi: false,
      correctAnswer: 'c'
    }
  ];
  
  const quiz = new Quiz(myQuestions);
  const quizUI = new QuizUI(quiz);
      