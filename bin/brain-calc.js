#!/usr/bin/env node
import genericLogic from '../src/index.js';
import calcGame from '../games/calc.js';

const task = 'What is the result of the expression?';
genericLogic(task, calcGame);
