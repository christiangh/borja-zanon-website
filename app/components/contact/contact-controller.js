angular.module('webBorja').controller('ContactController', ['$element', '$timeout', ContactController]);

function ContactController($element, $timeout){
	var contactCtrl = this;

	contactCtrl.buttonText = "Enviar";
	contactCtrl.message = emptyMessage();

	var isLastSuccess = false;
	var animationWorking = false;

	contactCtrl.showError = function(form, field){
		return field.$invalid && (field.$touched || form.$submitted);
	};

	contactCtrl.send = function(form){
		if(form.$invalid || animationWorking){
			return;
		}

		console.log("[Contact] Mensaje enviado:", angular.copy(contactCtrl.message));

		playSendAnimation($element.find(".btn-music"), function(success){
			if(success){
				contactCtrl.message = emptyMessage();
				form.$setPristine();
				form.$setUntouched();
			}
		});
	};

	function emptyMessage(){
		return { name: "", email: "", text: "" };
	}

	function playSendAnimation($button, onFinish){
		animationWorking = true;

		var originalText = $button.html();
		var animationDuration = 10000;

		var stave = document.createElement("DIV");
		$(stave).addClass("stave")
			.append("&nbsp;")
			.append("<span class='quaver'></span>")
			.append("<span class='minim'></span>")
			.append("<span class='semibreve'></span>")
			.append("<span class='crotchet'></span>")
			.append("<span class='minim'></span>")
			.append("<span class='semibreve'></span>")
			.append("<span class='quaver'></span>")
			.append("<span class='minim'></span>");

		$button.addClass("music-animation-on")
			.html("")
			.append(stave);

		var resultMessage = "";
		var success = !isLastSuccess;
		$timeout(function() {
			if(success){
				$button.addClass("activity-success");
				resultMessage = "<span class='result-message'>SUCCESS!</span>";
			}else{
				$button.addClass("activity-error");
				resultMessage = "<span class='result-message'>ERROR!</span>";
			}

			isLastSuccess = success;

			$timeout(function(){
				$button.html(resultMessage);

				$timeout(function(){
					$button.removeClass("activity-error activity-success music-animation-on")
						.html(originalText);

					animationWorking = false;
					onFinish(success);
				}, 2000);
			}, 500);
		}, animationDuration);
	}
}
