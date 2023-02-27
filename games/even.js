import readlineSync from 'readline-sync';
import randomiser from '../src/func.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const randomNumber = randomiser(0, 100);
  const answer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `);
  const realAnswer = isEven(randomNumber);
  return [answer, realAnswer];
};

export default game;
