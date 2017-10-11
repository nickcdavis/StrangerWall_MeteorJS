import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

angular.module('strangerwall', [
  angularMeteor
  , uiRouter
])

function onReady() {
  angular.bootstrap(document, ['strangerwall']);
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);
