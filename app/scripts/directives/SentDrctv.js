/**
 * Directive: Inbox <inbox></inbox>
 */
angular.module('ngMailApp')
  .directive('sent', function SentDrctv () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: 'scripts/directives/SentTmpl.html',
      controllerAs: 'sent',

      controller: function (SentFactory) {
        this.messages = [];

        this.getMessages = function (id) {
          SentFactory.goToSentMessage(id);
        };
        
        SentFactory.getSentMessages()
          .then( angular.bind( this, function then() {
              this.messages = SentFactory.messages;
            }) );

      },

      link: function (scope, element, attrs, ctrl) {
        
        scope.sent.search='';

      }
    };
  });