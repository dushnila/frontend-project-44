/* eslint-disable no-eval */
import readlineSync from 'readline-sync';
import randomiser from '../src/func.js';

const game = () => {
  const randomNumber1 = randomiser(-100, 100);
  const randomNumber2 = randomiser(-100, 100);
  const mathSymbols = ['*', '+', '-'];
  const SymbolsChooser = randomiser(0, 3);
  const mathSymbol = mathSymbols[SymbolsChooser];
  const answer = readlineSync.question(`Question: ${randomNumber1} ${mathSymbols[SymbolsChooser]} ${randomNumber2}\nYour answer: `);
  const realAnswer = String(eval(`${randomNumber1} ${mathSymbol} ${randomNumber2}`));
  return [answer, realAnswer];
};

export default game;
