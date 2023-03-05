#!/usr/bin/env node
import genericLogic from '../src/index.js';
import isEvenGame from '../src/games/even.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
genericLogic(task, isEvenGame);
