#!/usr/bin/env node
import genericLogic from '../src/index.js';
import primeGame from '../games/prime.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';
genericLogic(task, primeGame);
