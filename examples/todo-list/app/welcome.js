iris.screen(function(self) {

	var todos = iris.resource(iris.path.resource);

	self.create = function() {
		self.tmpl(iris.path.welcome.html);

		self.get("new-todo").on("keyup", function (e) {
			if ( e.keyCode === 13 && this.value.trim() !== "" ) {
				todos.add(this.value);
				this.value = "";
			}
		});

		self.get("toggle-all").on("change", function (e) {
			var completed = self.get("toggle-all").prop("checked");
			todos.setAll( completed );
		});

		self.get("clear-completed").on("click", todos.removeCompleted);

		// Resource events
		self.on(todos.CREATE_TODO, function (id) {
			self.ui("todo-list", iris.path.todo.js, {id: id}).render().show();
			render();
		});

		self.on(todos.DESTROY_TODO, render);
		self.on(todos.CHANGE_TODO, render);

		todos.init();
		render();
	};

	self.awake = function () {
		var filter = self.param("filter");
		if ( filter ) {
			todos.setFilter(filter);

			var $footer = self.get("footer");
			$(".selected", $footer).removeClass("selected");
			$("a[href='#?filter=" + filter + "']", $footer).addClass("selected");

			var uis = self.ui("todo-list");
			for (var i = 0; i < uis.length; i++ ) {
				uis[i].render();
			}
		}
	};

	function render () {
		var count = todos.count();
		self.inflate({
			completed: "Clear completed (" + count.completed + ")",
			remaining: {
				count: count.remaining,
				text: "item" + (count.remaining !== 1 ? "s " : " ") + "left" 
			},
			hasTodos: (count.total !== 0),
			hasRemainings: (count.completed > 0),
			noRemainingTodos: (count.remaining === 0)
		});
	}

}, iris.path.welcome.js);
