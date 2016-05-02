/**
 * Factory: SentFactory
 */
angular.module('ngMailApp')
	.factory('SentFactory', function SentFactory ($q, $http, $location) {
		
		'use strict';
		
		var exports = {};

		exports.messages = [];

		exports.goToSentMessage = function (id) {
			if ( angular.isNumber(id)) {
				console.log('sent/email/' + id);
				$location.path('sent/email/' + id);
			}
		};

		exports.getSentMessages = function () {
			var deferred = $q.defer();
			$http.get('scripts/json/outboxEmails.json')
				.success(function (data) {
					exports.messages = data;
					deferred.resolve(data);
				})
				.error(function (data) {
					deferred.reject(data);
				});
			return deferred.promise;
		};

		return exports;

	});