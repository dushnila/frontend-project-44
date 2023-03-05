#!/usr/bin/env node
import runEngine from '../src/index.js';
import progressionGame from '../src/games/progression.js';

const task = 'What number is missing in the progression?';
runEngine(task, progressionGame);
