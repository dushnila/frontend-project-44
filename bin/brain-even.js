#!/usr/bin/env node

import askAndHello from '../src/cli.js';
import isEven from '../src/even.js';

const name = askAndHello();
isEven(name);
