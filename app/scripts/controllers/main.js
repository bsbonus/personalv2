'use strict';

angular.module('personalv2App')
  .controller('MainCtrl', function ($scope) {
    var $scope.images1 = [
      {src: 'japan_1.jpg', cap: 'Nothing more relaxing than a bamboo forest.'},
      {src: 'japan_2.jpg', cap: 'Riverside loungin.'},
      {src: 'japan_3.jpg', cap: 'A quail egg cooked in a marinaded baby octopus. Boom.'},
    ]
    var $scope.images2 =[
      {src: 'japan_7.jpg', cap: 'Travel with your friends. Especially if he has a good beard.'}
      {src: 'japan_8.jpg', cap: "I don't know either. But it happened."}
      {src: 'japan_9.jpg', cap: 'Omakase breakfast at Tsukiji outer Market.'}
    ]
  });
