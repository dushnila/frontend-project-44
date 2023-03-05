/* eslint-disable no-eval */
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
  const randomNumber = randomiser(0, 101);
  const generateQuestion = `${randomNumber}`;
  const realAnswer = primeCheck(randomNumber);
  return [generateQuestion, realAnswer];
};

export default game;