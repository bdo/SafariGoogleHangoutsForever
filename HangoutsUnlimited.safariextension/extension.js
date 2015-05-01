(function(){

	function addJQuery(callback) {
		var script = document.createElement("script");
		script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js");
		script.addEventListener('load', function() {
			var script = document.createElement("script");
			script.textContent = "(" + callback.toString() + ")();";
			document.body.appendChild(script);
		}, false);
		document.body.appendChild(script);
	}

	function checkForPrompt() {
		function simulate(target, evtName) {
			evt = document.createEvent("MouseEvents");
			evt.initMouseEvent(evtName, true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, target);
			target.dispatchEvent(evt);
		}

		function simulateClick(target) {
			simulate(target, "mouseover");
			simulate(target, "mousedown");
			simulate(target, "mouseup");
			simulate(target, "mouseout");
		}

		$('div[role="button"]').each(function(_, item) {
			if ($(item).text() == "Yes" || $(item).text() == "Join") {
				simulateClick(item);
			}
		});

		setTimeout(checkForPrompt, 5000);
	}

	function init() {
		addJQuery(checkForPrompt);
	}

	setTimeout(init, 3000);
})();
