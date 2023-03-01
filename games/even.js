import randomiser from '../src/func.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const game = () => {
  const generateQuestion = randomiser(0, 100);
  const realAnswer = isEven(generateQuestion);
  return [generateQuestion, realAnswer];
};

export default game;
