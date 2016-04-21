/// <reference path="../../typings/main/ambient/jasmine/index.d.ts" />

describe('Poster controller', function () {
   var $scope;
   var $location;
   
   beforeEach(module('app'));
   
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
            $scope.url = '';
            $scope.input = '';
       };
       
    //    _$controller_(fn, {$scope: $scope})
        _$controller_('posterController', {
            $scope: $scope
        });
       
   })); 
   
   it('should pass', function(){
       expect(true).toEqual(true);
   });
   
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
   
   it('should have a url reference', function(){
       expect($scope.url).toBeDefined();
       expect($scope.url).not.toBeNull();
   });
   
   it('should have default input', function(){
       expect($scope.input).toBeDefined();
       expect($scope.input).toEqual('');
   });
});