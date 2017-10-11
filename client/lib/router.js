
angular.module("strangerwall").run(['$rootScope', '$state', function($rootScope, $state) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {

  });

  $rootScope.$on('$stateChangeStart',
  function(event, toState, toParams, fromState, fromParams) {
      /*event.currentScope.currentPage = toState.name;*/
  });

  $rootScope.$on('$viewContentLoaded',
  function(event, toState, toParams, fromState, fromParams) {
      /*$(document).foundation('reflow');*/
  });
}]);

angular.module('strangerwall').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider) {

   $locationProvider.html5Mode(true);

   $stateProvider

  .state('chat', {
    url: '/chat',
    templateUrl: 'client/chat/chat.ng.html',
    controller: 'chatCtrl'
  })

 $urlRouterProvider.otherwise("/chat");
}]);
