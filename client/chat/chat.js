angular.module("strangerwall").controller("chatCtrl", ['$scope', '$meteor', '$interval', function($scope, $meteor, $interval) {
  /*$reactive(this).attach($scope);*/
  $scope.newMessage = {
    time: new Date(),
    read: false,
    text: ''
  };
  $scope.messages = [];

  $interval(function() {
    $scope.$meteorSubscribe('messages:load').then(function(val) {
      $scope.messages = $scope.$meteorCollection(messages, false);
    });
  }, 30000); //30 seconds

  $scope.load = function() {
    //Get data from server

  }

  $scope.pushMessage = function() {
    //Push messages to the server
    $scope.newMessage.time = new Date();

    Meteor.call('messages:post', $scope.newMessage, function(error, result) {
      $scope.newMessage.text = '';
    });
  }

}]);
