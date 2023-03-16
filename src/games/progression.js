import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

const makeProgression = (first, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(first + step * i);
  }
  return progression;
};

const generateRound = () => {
  const randomFirstValue = getRandomInRange(0, 100);
  const randomStep = getRandomInRange(1, 10);
  const randomRowLength = getRandomInRange(5, 10);
  const row = makeProgression(randomFirstValue, randomStep, randomRowLength);
  const randomIndex = getRandomInRange(0, row.length - 1);
  const realAnswer = `${row[randomIndex]}`;
  row[randomIndex] = '..';
  const questionRow = row.join(' ');
  const generateQuestion = `Question: ${questionRow}`;
  return [generateQuestion, realAnswer];
};

const rule = 'What number is missing in the progression?';

export default () => runEngine(rule, generateRound);
