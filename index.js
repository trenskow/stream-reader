export default (stream) => {

	return new Promise((resolve, reject) => {

		let result = new Buffer.alloc(0);

		stream.on('data', (buffer) => {
			result = Buffer.concat([result, buffer]);
		});

		stream.once('end', () => resolve(result));

		stream.once('error', (err) => {
			reject(err);
		});

	});

};
