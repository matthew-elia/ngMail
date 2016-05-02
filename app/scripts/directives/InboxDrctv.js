/**
 * Directive: Inbox <inbox></inbox>
 */
angular.module('ngMailApp')
  .directive('inbox', function InboxDrctv () {
    'use strict';

    return {
      restrict: 'EA',
      replace: true,
      scope: true,
      templateUrl: 'scripts/directives/InboxTmpl.html',
      controllerAs: 'inbox',

      controller: function (InboxFactory) {
        this.messages = [];

        this.getMessages = function (id) {
          InboxFactory.goToMessage(id);
        };
        
        this.deleteMessage = function (id, index) {
          InboxFactory.deleteMessage(id, index);
        };
        
        InboxFactory.getMessages()
          .then( angular.bind( this, function then() {
              this.messages = InboxFactory.messages;
            }) );

      },

      link: function (scope, element, attrs, ctrl) {
        
        scope.inbox.search='';

      }
    };
  });