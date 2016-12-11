/* global angular */
var app = angular.module("votingApp", ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            controller: "homeController",
            templateUrl: "views/login.html"
        })
        .when('/dashboard', {
            controller: "mainController",
            templateUrl: "views/dashboard.html"
        })
        .when('/dashboard/:pollName', {
            controller: 'pollController',
            templateUrl: "views/poll.html"
        })
        .otherwise({
            redirectTo: '/'
        })
})
    