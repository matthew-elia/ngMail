/**
 * Factory: EmailFactory
 */
angular.module('ngMailApp')
  .factory('EmailFactory', function EmailFactory ($q, $http, $routeParams) {
    'use strict';
    var exports = {};

    exports.reply = function (message) {
      if (message) {
        console.log('Reply content: ' + message);
      }
    };

    exports.viewInboxMessage = function (params) {
      if ( params.id ) {
        var deferred = $q.defer();
        $http.get('scripts/json/inbox/' + params.id + '.json')
          .success(function (data) {
            deferred.resolve(data);
          })
          .error(function (data) {
            deferred.reject(data);
          });
        return deferred.promise;
      }
    };

    exports.viewSentMessage = function (params) {
      if ( params.id ) {
        var deferred = $q.defer();
        $http.get('scripts/json/outbox/' + params.id + '.json')
          .success(function (data) {
            deferred.resolve(data);
          })
          .error(function (data) {
            deferred.reject(data);
          });
        return deferred.promise;
      }
    };

    return exports;
  });