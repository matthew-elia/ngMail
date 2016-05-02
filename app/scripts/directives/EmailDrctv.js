/**
 * Directive: Email <email></email>
 */
angular.module('ngMailApp')
  .directive('email', function EmailDrctv ($timeout) {
    'use strict';

    return {
      restrict: 'E',
      replace: true,
      scope: true,
      templateUrl: 'scripts/directives/EmailTmpl.html',
      controllerAs: 'email',
      controller: function ($routeParams, $scope, EmailFactory) {
        
        this.message = {};
        this.reply = function (message) {
          EmailFactory.reply(message);
        };
        
        var viewInboxMessage = EmailFactory.viewInboxMessage($routeParams);
        var viewSentMessage = EmailFactory.viewSentMessage($routeParams);
        
        if (viewSentMessage) {
          viewSentMessage.then( angular.bind(this, function (response) {
            EmailFactory.message = response;
            this.message = EmailFactory.message;
            $scope.$parent.email.title = this.message.subject;
          }) );
        }

        if(viewInboxMessage){
          viewInboxMessage.then( angular.bind(this, function (response) {
            EmailFactory.message = response;
            this.message = EmailFactory.message;
            $scope.$parent.email.title = this.message.subject;
          }) ); 
        }
        
      },
      link: function (scope, element, attrs, ctrl) {
        var textarea = element.find('.form-group')[0];
        scope.$watch('reply', function (newVal, oldVal) {
          if (newVal === oldVal) {return;}
          if (newVal) {
            $timeout(function () {
              textarea.focus();
            }, 0);
          }
        });
      }
    };
  });