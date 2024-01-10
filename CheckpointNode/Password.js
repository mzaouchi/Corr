var generator = require('generate-password');

var password = generator.generate({
	length: 5,
	numbers: false
});

// 'uEyMTw32v9'
console.log(password);