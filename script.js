const quotes = [
  "Greatness begins when you choose to think clearly.",
  "Discipline beats motivation when motivation disappears.",
  "Small daily improvements create powerful long-term results.",
  "A calm mind solves problems faster than a panicked one.",
  "The best thinkers question assumptions.",
  "Focus on progress, not perfection.",
  "A genius mindset starts with better habits.",
  "One smart decision today can change your future.",
  "Clarity creates momentum.",
  "Your mind becomes stronger when you train it with purpose."
];

const quoteText = document.getElementById("quote-text");
const quoteBtn = document.getElementById("quote-btn");

quoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
