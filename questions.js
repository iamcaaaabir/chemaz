document.addEventListener('DOMContentLoaded', () => {
  const maxQuestions = 100; // max number of question slots you have in HTML

  for (let i = 1; i <= maxQuestions; i++) {
    const questionImg = document.getElementById(`question${i}`);
    const solutionImg = document.getElementById(`solution${i}`);
    const card = questionImg ? questionImg.closest('.question-card') : null;

    if (!questionImg || !solutionImg || !card) {
      // No images or no card, hide the card if exists
      if (card) card.style.display = 'none';
      continue;
    }

    // Try to load images; if 404, hide the card
    questionImg.onerror = () => {
      card.style.display = 'none';
    };
    solutionImg.onerror = () => {
      card.style.display = 'none';
    };

    // You could optionally set src here if you want to load dynamically:
    // questionImg.src = `images/questions/question${i}.jpg`;
    // solutionImg.src = `images/solutions/solution${i}.jpg`;
  }

  // Show/hide answer toggle
  const buttons = document.querySelectorAll('.show-answer-btn');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const answerContent = button.nextElementSibling;
      if (answerContent.classList.contains('show')) {
        answerContent.classList.remove('show');
        button.textContent = 'Show Answer';
      } else {
        answerContent.classList.add('show');
        button.textContent = 'Hide Answer';
      }
    });
  });
});
