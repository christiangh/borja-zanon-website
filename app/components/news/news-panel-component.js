/**
 * Master-detail news panel: a list of headlines and the selected news item.
 *
 * Usage: <news-panel news="ctrl.news"></news-panel>
 * where `news` is an array of { id, date, title, paragraphs, image: { src, alt } }.
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

	ctrl.isSelected = function(item){
		return ctrl.selected === item;
	};
}
