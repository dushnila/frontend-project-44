/* eslint-disable no-eval */

import getRandomInRange from '../utils.js';

const game = () => {
  const randomNumber1 = getRandomInRange(-10, 10);
  const randomNumber2 = getRandomInRange(0, 10);
  const mathSymbols = ['*', '+', '-'];
  const SymbolsChooser = getRandomInRange(0, 3);
  const mathSymbol = mathSymbols[SymbolsChooser];
  const generateQuestion = `${randomNumber1} ${mathSymbols[SymbolsChooser]} ${randomNumber2}`;
  const realAnswer = String(eval(`${randomNumber1} ${mathSymbol} ${randomNumber2}`));
  return [generateQuestion, realAnswer];
};

export default game;
