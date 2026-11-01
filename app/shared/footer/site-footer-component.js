angular.module('webBorja').component('siteFooter', {
	templateUrl: 'app/shared/footer/site-footer.html',
	controller: SiteFooterController
});

function SiteFooterController(){
	var ctrl = this;

	ctrl.startYear = 2015;
	ctrl.currentYear = new Date().getFullYear();
	ctrl.repoUrl = 'https://github.com/christiangh/borja-zanon-website';
}
