import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const progression = (first, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(first + step * i);
  }
  return result;
};

const generateRound = () => {
  const randomFirstValue = getRandomInRange(0, 100);
  const randomStep = getRandomInRange(1, 10);
  const randomRowLength = getRandomInRange(5, 10);
  const row = progression(randomFirstValue, randomStep, randomRowLength);
  const randomIndex = getRandomInRange(0, row.length - 1);
  const realAnswer = `${row[randomIndex]}`;
  row[randomIndex] = '..';
  const questionRow = row.join(' ');
  const generateQuestion = `Question: ${questionRow}`;
  return [generateQuestion, realAnswer];
};

const rule = 'What number is missing in the progression?';

export default () => runEngine(rule, generateRound);
