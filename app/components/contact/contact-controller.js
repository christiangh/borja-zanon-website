angular.module('webBorja').controller('ContactController', ['$timeout', ContactController]);

function ContactController($timeout){
	var contactCtrl = this;

	// Fake request duration, long enough to play the whole stave animation
	var SEND_DURATION = 10000;

	contactCtrl.message = emptyMessage();
	contactCtrl.sendStatus = 'idle';

	var isLastSuccess = false;

	contactCtrl.showError = function(form, field){
		return field.$invalid && (field.$touched || form.$submitted);
	};

	contactCtrl.send = function(form){
		if(form.$invalid || contactCtrl.sendStatus !== 'idle'){
			return;
		}

		console.log("[Contact] Mensaje enviado:", angular.copy(contactCtrl.message));

		contactCtrl.sendStatus = 'sending';

		// Nothing is really sent: alternate success and error to show both results
		$timeout(function(){
			isLastSuccess = !isLastSuccess;
			contactCtrl.sendStatus = isLastSuccess ? 'success' : 'error';
		}, SEND_DURATION);
	};

	contactCtrl.onSendFinished = function(form){
		if(contactCtrl.sendStatus === 'success'){
			contactCtrl.message = emptyMessage();
			form.$setPristine();
			form.$setUntouched();
		}

		contactCtrl.sendStatus = 'idle';
	};

	function emptyMessage(){
		return { name: "", email: "", text: "" };
	}
}
