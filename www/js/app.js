// Ionic Starter App

var ionicApp = angular.module('starter', ['ionic', 'ngCordova'])

ionicApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

ionicApp.controller('myCtrl', function($scope, $cordovaFlashlight){

    $scope.call = function(){

 $cordovaFlashlight.toggle()
    .then(function (success) { /* success */ },
      function (error) { /* error */ });

}

});
