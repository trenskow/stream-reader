//
// index.js
// @trenskow/stream-reader
//
// Created by Kristian Trenskow on 2025/12/21
// See license in LICENSE.
//

export default (stream, encoding) => {

	return new Promise((resolve, reject) => {

		let result = new Buffer.alloc(0);

		stream.on('data', (buffer) => {
			result = Buffer.concat([result, buffer]);
		});

		stream.once('end', () => resolve(encoding ? result.toString(encoding) : result));

		stream.once('error', (err) => {
			reject(err);
		});

	});

};
