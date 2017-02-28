var app = angular.module('app', ["ngRoute", 'ngMaterial']);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  // Home
    .when("/", {templateUrl: "vistas/home.html"})
    .when("/contact", {templateUrl: "vistas/contact.html"})
//     .when("/admin", {templateUrl: "/views/admin.html", controller:"admin"})


    // else 404
//     .otherwise("/404", {templateUrl: "/angularviews/partials/404.html", controller: "PageCtrl"});

}]);

