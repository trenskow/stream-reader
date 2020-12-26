'use strict';

exports = module.exports = (stream) => {

	return new Promise((resolve, reject) => {

		let result = Buffer.alloc(0);

		stream.on('data', (data) => result = Buffer.concat([result, data]));
		stream.on('error', reject);
		stream.on('end', () => resolve(result));

	});

};
