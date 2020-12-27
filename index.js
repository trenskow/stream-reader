'use strict';

exports = module.exports = (stream, options = {}) => {

	return new Promise((resolve, reject) => {

		let rejected = false;

		let result = new Buffer.alloc(0);

		stream.on('data', (buffer) => {
			if (rejected) return;
			result = Buffer.concat([result, buffer]);
			if (typeof options.limit === 'number' && result.length > options.limit) {
				rejected = true;
				reject(options.error ? options.error() : new Error('Stream length limit reached.'));
			}
		});

		stream.on('end', resolve);
		stream.on('error', (err) => {
			if (!rejected) reject(err);
		});

	});

};
