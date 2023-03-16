import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

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

const generateRound = () => {
  const firstNum = getRandomInRange(-10, 10);
  const secondNum = getRandomInRange(0, 10);
  const operator = getRandomOperator();
  const generateQuestion = `${firstNum} ${operator} ${secondNum}`;
  const realAnswer = `${calculation(firstNum, secondNum, operator)}`;
  return [generateQuestion, realAnswer];
};

const rule = 'What is the result of the expression?';

export default () => runEngine(rule, generateRound);
