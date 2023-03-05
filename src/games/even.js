import getRandomInRange from '../utils.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const generateQuestion = getRandomInRange(0, 100);
  const realAnswer = isEven(generateQuestion);
  return [generateQuestion, realAnswer];
};

export default game;
