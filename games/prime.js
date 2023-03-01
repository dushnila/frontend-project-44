/* eslint-disable no-eval */
import readlineSync from 'readline-sync';
import randomiser from '../src/func.js';

const primeCheck = (num) => {
  if (num === 1) { return 'no'; }
  let firstDevider = Math.ceil(num / 2);
  while (num % firstDevider !== 0) {
    firstDevider -= 1;
  }
  const result = firstDevider === 1 ? 'yes' : 'no';
  return result;
};

const game = () => {
  const randomNumber = randomiser(0, 100);
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  const realAnswer = primeCheck(randomNumber);
  return [answer, realAnswer];
};

export default game;
