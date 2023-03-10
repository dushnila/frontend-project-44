import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const gcdFinder = (number1, number2) => {
  let num1 = number1;
  let num2 = number2;
  while (num1 !== num2) {
    if (num1 > num2) {
      num1 -= num2;
    } else {
      num2 -= num1;
    }
  }
  const gcd = num1;
  return gcd;
};

const generateRound = () => {
  const randomNumber1 = getRandomInRange(0, 100);
  const randomNumber2 = getRandomInRange(0, 100);
  return [randomNumber1, randomNumber2];
};

const round = () => {
  const [randomNumber1, randomNumber2] = generateRound();
  const generateQuestion = `${randomNumber1} ${randomNumber2}`;
  const realAnswer = String(gcdFinder(randomNumber1, randomNumber2));
  return [generateQuestion, realAnswer];
};

const rule = 'Find the greatest common divisor of given numbers.';

export default () => runEngine(rule, round);
