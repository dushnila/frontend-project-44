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
  const randomIndex = getRandomInRange(0, arr.length);
  const extractedValue = `${arr[randomIndex]}`;
  const newArr = arr;
  newArr[randomIndex] = '..';
  const strinArr = arr.join(' ');
  return [extractedValue, strinArr];
};

const game = () => {
  const randomFirstValue = getRandomInRange(0, 100);
  const randomRatio = getRandomInRange(1, 10);
  const randomRowLength = getRandomInRange(5, 11);
  const generatedRow = makeMathRow(randomFirstValue, randomRatio, randomRowLength);
  const [realAnswer, questionRow] = extractRandomNumber(generatedRow);
  const generateQuestion = `Question: ${questionRow}`;
  return [generateQuestion, realAnswer];
};

export default game;
