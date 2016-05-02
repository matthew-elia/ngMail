'use strict';

angular
  .module('ngMailApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(function ($routeProvider) {

  $routeProvider
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl',
      controllerAs: 'inbox'
    })
    .when('/inbox/email/:id', {
      templateUrl: 'views/inbox.html',
      controller: 'EmailCtrl',
      controllerAs: 'email'
    })
    .when('/sent', {
      templateUrl: 'views/sent.html',
      controller: 'SentCtrl',
      conrollerAs: 'sent'
    })
    .when('/sent/email/:id', {
      templateUrl: 'views/sent.html',
      controller: 'EmailCtrl',
      controllerAs: 'email'
    })
    .otherwise({
      redirectTo: '/inbox'
    });

  }).run(function($rootScope){
    $rootScope.$on('$routeChangeError', function(event, current, previous, rejection){
      console.log(event, current, previous, rejection);
    });
  });