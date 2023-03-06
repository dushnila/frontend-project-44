import getRandomInRange from '../utils.js';

const isEven = (num) => (num % 2 === 0);

const game = () => {
  const generateQuestion = getRandomInRange(0, 100);
  const realAnswer = isEven(generateQuestion) ? 'yes' : 'no';
  return [generateQuestion, realAnswer];
};

export default game;
