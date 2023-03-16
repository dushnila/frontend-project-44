/* eslint-disable no-eval */
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isPrime = (num) => {
  if (num === 1) { return false; }
  let firstDevider = Math.ceil(num / 2);
  while (num % firstDevider !== 0) {
    firstDevider -= 1;
  }
  return firstDevider === 1;
};

const generateRound = () => {
  const randomNumber = getRandomInRange(0, 200);
  const generateQuestion = `${randomNumber}`;
  const realAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return [generateQuestion, realAnswer];
};

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => runEngine(rule, generateRound);
