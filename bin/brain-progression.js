#!/usr/bin/env node
import genericLogic from '../src/index.js';
import progressionGame from '../games/progression.js';

const task = 'What number is missing in the progression?';
genericLogic(task, progressionGame);
