import { answers } from './answers.js';

// import functions and grab DOM elements
const questionButton = document.getElementById('question');
const submitButton = document.getElementById('submit');
const answerDisplay = document.getElementById('answer-display');

const randomNum = (max)=>{
    return (Math.floor(Math.random() * max) + 1);
};

// initialize global state

// set event listeners 

submitButton.addEventListener('click', ()=> {
    const randomIdx = randomNum(answers.length);
    answerDisplay.textContent = answers[randomIdx];
});

questionButton.addEventListener('click', ()=>{

});

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  