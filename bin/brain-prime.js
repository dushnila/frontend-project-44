#!/usr/bin/env node
import runEngine from '../src/index.js';
import primeGame from '../src/games/prime.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
runEngine(task, primeGame);
