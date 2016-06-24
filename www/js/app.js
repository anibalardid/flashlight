// Ionic Starter App

var ionicApp = angular.module('starter', ['ionic', 'ngCordova'])

ionicApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            //StatusBar.styleDefault();
            window.StatusBar.overlaysWebView(false);
            window.StatusBar.styleHex('#000000');
        }
    });
});

ionicApp.controller('myCtrl', function($scope, $cordovaFlashlight){

    $scope.isOn  = false;
    $scope.isOff = true;

    $scope.turnon = function(){
        $scope.isOn  = true;
        $scope.isOff = false;
        $cordovaFlashlight.switchOn()
        .then(
            function (success) { },
            function (error) { 
                $scope.isOn  = false;
                $scope.isOff = true;
            }
        );
    };

    $scope.turnoff = function(){
        $scope.isOn  = false;
        $scope.isOff = true;
        $cordovaFlashlight.switchOff()
        .then(
            function (success) { },
            function (error) { 
                $scope.isOn  = true;
                $scope.isOff = false;
            }
        );
    };

});
