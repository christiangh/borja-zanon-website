/**
 * Master-detail news panel: a list of headlines and the selected news item.
 *
 * Usage: <news-panel news="ctrl.news"></news-panel>
 * where `news` is an array of { id, date, title, paragraphs, image: { src, alt, focus } }
 * and `image.focus` is an optional { x, y } focal point in percentages.
 * The first item is selected by default.
 */
angular.module('webBorja').component('newsPanel', {
	bindings: {
		news: '<'
	},
	templateUrl: 'app/components/news/news-panel.html',
	controller: NewsPanelController
});

function NewsPanelController(){
	var ctrl = this;

	ctrl.selected = null;

	ctrl.$onChanges = function(changes){
		if(changes.news){
			var news = changes.news.currentValue || [];
			ctrl.selected = news.length ? news[0] : null;
		}
	};

	ctrl.select = function(item){
		ctrl.selected = item;
	};

	// Turns image.focus ({ x, y } in %) into an object-position value
	ctrl.getFocus = function(image){
		var focus = image.focus || {};
		var x = angular.isNumber(focus.x) ? focus.x : 50;
		var y = angular.isNumber(focus.y) ? focus.y : 50;

		return x + '% ' + y + '%';
	};

	ctrl.isSelected = function(item){
		return ctrl.selected === item;
	};
}
