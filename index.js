const server = require('./api/server');

const PORT = process.nextTick.PORT || 5050;

server.listen(PORT, () => {
	console.log(`\n*** the Server is running on ${PORT} ***\n`);
});
