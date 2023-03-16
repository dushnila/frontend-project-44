import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const generateRound = () => {
  const generateQuestion = getRandomInRange(0, 100);
  const realAnswer = isEven(generateQuestion) ? 'yes' : 'no';
  return [generateQuestion, realAnswer];
};

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => runEngine(rule, generateRound);
