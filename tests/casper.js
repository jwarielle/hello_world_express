casper.test.begin('testing express app', 1, function suit(test) {
	
	casper.start('http://localhost:3000/', function() {
		test.assertHttpStatus(200);
	});

	casper.run(function() {
		test.done();
	});

});