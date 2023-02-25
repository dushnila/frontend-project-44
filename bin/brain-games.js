#!/usr/bin/env node

import askAndHello from '../src/cli.js';
import isEven from './brain-even.js';

const name = askAndHello();
isEven(name);
