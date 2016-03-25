(function(){
    
    var app = angular.module('borja-app', ['ngRoute']);

    app.config(function ($routeProvider){
        $routeProvider
            .when("/", {
                controller: "HomeController",
                templateUrl: "/templates/home.html"
            })
            .when("/biography/", {
                controller: "BiographyController",
                templateUrl: "/templates/biography.html"
            })
            .when("/services/", {
                controller: "ServicesController",
                templateUrl: "/templates/services.html"
            })
            .when("/gallery/", {
                controller: "GalleryController",
                templateUrl: "/templates/gallery.html"
            })
            .when("/contact/", {
                controller: "ContactController",
                templateUrl: "/templates/contact.html"
            })
            .when("/404/", {
                controller: "404Controller",
                templateUrl: "/templates/404.html"
            })
            .otherwise("/404/");
    });

    app.controller("HomeController", function(){
        //código del controlador (lo estoy usando en todas las rutas, en este sencillo ejemplo)
    });

    app.controller("BiographyController", function(){
        //código del controlador (lo estoy usando en todas las rutas, en este sencillo ejemplo)
    });
    
})();