angular.module('webBorja').controller('ContactController', ContactController);

function ContactController(){
	var contactCtrl = this;

	contactCtrl.buttonText = "Send";

	var isLastSuccess = false;
	var animationWorking = false;

	$(".btn-music").on("click", function(){
		if(animationWorking){
			return false;
		}

		animationWorking = true;

		var button = this;
		var $button = $(this);

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
		setTimeout(function() {
			if(isLastSuccess){
				//Error
				$button.addClass("activity-error");
				resultMessage = "<span class='result-message'>ERROR!</span>";
			}else{
				//Success
				$(button).addClass("activity-success");
				resultMessage = "<span class='result-message'>SUCCESS!</span>";
			}

			isLastSuccess = !isLastSuccess;

			setTimeout(function(){
				$button.html(resultMessage);

				setTimeout(function(){
					$button.removeClass("activity-error activity-success music-animation-on")
						.html(originalText);

					animationWorking = false;
				}, 2000);
			}, 500);
		}, animationDuration);


	});
}
