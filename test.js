import streamReader from './index.js';
import { PassThrough } from 'stream';

const stream = new PassThrough();

stream.write('Hello, World!');

stream.end();

streamReader(stream)
	.then((result) => result.toString('utf-8'))
	.then(console.info);

