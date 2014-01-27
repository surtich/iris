iris.screen(function (self) {

	self.create = function() {
		self.tmpl(iris.path.welcome_tmpl);

		iris.on("test-event", testFunc);
		iris.on("remove-test-event", removeTestFunc);
		iris.on("remove-all-test-event", removeAllTestFunc);
	};

	function testFunc () {
		window.ok(true, 'Executed test-event callback');
	}

	function removeTestFunc () {
		window.ok(true, 'Executed remove-test-event callback once');
		self.off("remove-test-event", removeTestFunc);
		self.notify("remove-test-event"); // No callbacks after self.off
	}

	function removeAllTestFunc () {
		window.ok(true, 'Executed remove-all-test-event callback once');
		self.off("remove-all-test-event");
		self.notify("remove-all-test-event"); // No callbacks after self.off
	}

},iris.path.welcome);