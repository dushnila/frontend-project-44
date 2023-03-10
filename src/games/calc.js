import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const generateRound = () => {
  const firstNum = getRandomInRange(-10, 10);
  const secondNum = getRandomInRange(0, 10);
  return [firstNum, secondNum];
};

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Operator - ${operator}, is incorrect!`);
  }
};

const round = () => {
  const [firstNum, secondNum] = generateRound();
  const operator = getRandomOperator();
  const generateQuestion = `${firstNum} ${operator} ${secondNum}`;
  const realAnswer = `${calculation(firstNum, secondNum, operator)}`;
  return [generateQuestion, realAnswer];
};

const rule = 'What is the result of the expression?';

export default () => runEngine(rule, round);
