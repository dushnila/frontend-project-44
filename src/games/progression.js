import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const makeMathRow = (firstValue, ratio, rowLength) => {
  const arr = [];
  let accum = firstValue;
  for (let i = 0; i < rowLength; i += 1) {
    accum += ratio;
    arr.push(accum);
  }
  return arr;
};

const extractRandomNumber = (arr) => {
  const randomIndex = getRandomInRange(0, arr.length - 1);
  const extractedValue = `${arr[randomIndex]}`;
  const newArr = arr;
  newArr[randomIndex] = '..';
  const strinArr = arr.join(' ');
  return [extractedValue, strinArr];
};

const generateRound = () => {
  const randomFirstValue = getRandomInRange(0, 100);
  const randomRatio = getRandomInRange(1, 10);
  const randomRowLength = getRandomInRange(5, 10);
  const generatedRow = makeMathRow(randomFirstValue, randomRatio, randomRowLength);
  return generatedRow;
};

const round = () => {
  const row = generateRound();
  const [realAnswer, questionRow] = extractRandomNumber(row);
  const generateQuestion = `Question: ${questionRow}`;
  return [generateQuestion, realAnswer];
};

const rule = 'What number is missing in the progression?';

export default () => runEngine(rule, round);
