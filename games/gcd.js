import randomiser from '../src/func.js';

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

const game = () => {
  const randomNumber1 = randomiser(0, 101);
  const randomNumber2 = randomiser(0, 101);
  const generateQuestion = `${randomNumber1} ${randomNumber2}`;
  const realAnswer = String(gcdFinder(randomNumber1, randomNumber2));
  return [generateQuestion, realAnswer];
};

export default game;
