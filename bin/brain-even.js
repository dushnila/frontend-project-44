#!/usr/bin/env node
import runEngine from '../src/index.js';
import isEvenGame from '../src/games/even.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';
runEngine(task, isEvenGame);
