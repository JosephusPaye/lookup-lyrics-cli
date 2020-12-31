#!/usr/bin/env node

import sade from 'sade';
import { lookupLyrics } from './lookup-lyrics';

const pkg = require('../package.json');

const prog = sade('lyrics <song> <artist>')
  .version(pkg.version)
  .describe('Find lyrics of the given song by the given artist.')
  .example('happy "pharrell williams"')
  .example('"say the name" clipping')
  .action(lookupLyrics);

prog.parse(process.argv);
