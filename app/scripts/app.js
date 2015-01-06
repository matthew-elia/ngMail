'use strict';

/**
 * @ngdoc overview
 * @name ngMailApp
 * @description
 * # ngMailApp
 *
 * Main module of the application.
 */
angular
  .module('ngMailApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ]).config(function ( $routeProvider ) {
  // configure urls
  $routeProvider
    // inbox route
    .when('/inbox', {
      templateUrl: 'views/inbox.html',
      controller: 'InboxCtrl', // map js to html scope
    })
    .otherwise({ // default
      redirectTo: '/inbox'
    });
});

