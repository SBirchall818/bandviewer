/// <reference path="../../typings/main/ambient/jasmine/index.d.ts" />

describe('Poster controller', function () {
   var $scope;
   var $location;
   
   beforeEach(inject(function(_$controller_){
       $location = {
           url: ''
       };
       
       $scope = {};       
       
       // function that describes a controller that we are mocking up
       var fn = function($scope){
           $scope.display = false;
           $scope.events = {
                click: function () {
                    $scope.display = !$scope.display;
                }
            }
       };
       
       _$controller_(fn, {$scope: $scope})
       
   })); 
   
   it('should have display defaulted to false', function(){
       expect($scope.display).toEqual(false);
   });
   
   it('click function should toggle display', function(){
       expect($scope.display).toEqual(false);
       $scope.events.click();
       expect($scope.display).toEqual(true);
       $scope.events.click();
       expect($scope.display).toEqual(false);
   });
});