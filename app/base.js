angular.module('myMenu',['ng','ngRoute','ngAnimate','myCtrl','myDirective','myAnimate'])
    .config(function($routeProvider){
      $routeProvider
          .when('/start',{
            templateUrl:'view/start.html',
            controller:'startCtrl'
          })
          .when('/detail/:fid',{
            templateUrl:'view/detail.html',
            controller:'detailCtrl'
          })
          .otherwise({
            redirectTo:'/start'
          });
    });
