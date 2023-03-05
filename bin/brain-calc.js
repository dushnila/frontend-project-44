#!/usr/bin/env node
import genericLogic from '../src/index.js';
import calcGame from '../src/games/calc.js';

const task = 'What is the result of the expression?';
genericLogic(task, calcGame);
