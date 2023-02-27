import readlineSync from 'readline-sync';
import randomiser from '../src/func.js';

const gcdFinder = (num1, num2) => {
  const minNum = num1 < num2 ? num1 : num2;
  const maxNum = num1 > num2 ? num1 : num2;
  let gcd = minNum;
  while (gcd > 1) {
    const isGcd = (maxNum % gcd === 0) && (minNum % gcd === 0);
    if (isGcd) { return gcd; }
    gcd -= 1;
  }
  return gcd;
};

const game = () => {
  const randomNumber1 = randomiser(0, 101);
  const randomNumber2 = randomiser(0, 101);
  const answer = readlineSync.question(`Question: ${randomNumber1} ${randomNumber2}\nYour answer: `);
  const realAnswer = String(gcdFinder(randomNumber1, randomNumber2));
  return [answer, realAnswer];
};

export default game;
