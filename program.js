process.stdin.setEncoding('utf-8');
console.log('Enter "lang" or "ver" to start, or "exit" to quit app.');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (input !== null) {
	var instruction = input.toString().trim();
	switch(instruction) {
		case '/exit':
			process.stdout.write('Quitting app!\n');
			process.exit();
			break;
		case "lang":
			process.stdout.write('Language: ' + process.env.LANG + '\n');
			break;
		case "ver":
			process.stdout.write('Node version: ' + process.versions.node + '\n')
			break;
		default:
			process.stderr.write('Wrong instruction\n');
		}
	}
});