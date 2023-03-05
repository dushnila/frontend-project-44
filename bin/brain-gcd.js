#!/usr/bin/env node
import genericLogic from '../src/index.js';
import gcdGame from '../src/games/gcd.js';

const task = 'Find the greatest common divisor of given numbers.';
genericLogic(task, gcdGame);
