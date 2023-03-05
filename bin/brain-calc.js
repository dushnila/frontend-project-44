#!/usr/bin/env node
import runEngine from '../src/index.js';
import calcGame from '../src/games/calc.js';

const task = 'What is the result of the expression?';
runEngine(task, calcGame);
