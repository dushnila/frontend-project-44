/* eslint-disable no-eval */

import randomiser from '../src/func.js';

const game = () => {
  const randomNumber1 = randomiser(-10, 10);
  const randomNumber2 = randomiser(0, 10);
  const mathSymbols = ['*', '+', '-'];
  const SymbolsChooser = randomiser(0, 3);
  const mathSymbol = mathSymbols[SymbolsChooser];
  const generateQuestion = `${randomNumber1} ${mathSymbols[SymbolsChooser]} ${randomNumber2}`;
  const realAnswer = String(eval(`${randomNumber1} ${mathSymbol} ${randomNumber2}`));
  return [generateQuestion, realAnswer];
};

export default game;
