/**
 * Submit button with a music stave animation.
 *
 * Purely presentational: the parent owns the send state and drives it through `status`.
 *  - idle:    shows the label
 *  - sending: plays the stave animation
 *  - success / error: fades the stave out, shows the result and then calls `onFinish`
 *
 * The parent is expected to set `status` back to "idle" from `onFinish`.
 */
angular.module('webBorja').component('musicButton', {
	bindings: {
		status: '<',
		label: '@',
		onFinish: '&'
	},
	templateUrl: 'app/shared/music-button/music-button.html',
	controller: ['$timeout', MusicButtonController]
});

function MusicButtonController($timeout){
	var ctrl = this;

	// Must match the opacity transition of the stave in _music-button.scss
	var FADE_DURATION = 500;
	var RESULT_DURATION = 2000;

	var timers = [];

	// idle | playing | fading | result
	ctrl.phase = 'idle';

	ctrl.$onChanges = function(changes){
		if(!changes.status){
			return;
		}

		cancelTimers();

		var status = changes.status.currentValue;

		if(status === 'sending'){
			ctrl.phase = 'playing';
		}else if(status === 'success' || status === 'error'){
			ctrl.phase = 'fading';

			later(function(){
				ctrl.phase = 'result';
				later(ctrl.onFinish, RESULT_DURATION);
			}, FADE_DURATION);
		}else{
			ctrl.phase = 'idle';
		}
	};

	ctrl.$onDestroy = cancelTimers;

	ctrl.isAnimating = function(){
		return ctrl.status === 'sending' || ctrl.status === 'success' || ctrl.status === 'error';
	};

	function later(fn, delay){
		timers.push($timeout(fn, delay));
	}

	function cancelTimers(){
		timers.forEach($timeout.cancel);
		timers = [];
	}
}
