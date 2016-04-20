/// <reference path="../../typings/main.d.ts" />
/// <reference path="../../src/filmsearch/filmsearch.controller.ts" />

describe('filmsearch controller', () => {
    var $scope: filmsearch.IFilmsearchScope;
    
    beforeEach(/*ng.mock.*/module('app'));
    
    beforeEach(inject(function(_$controller_: ng.IControllerService) {
        $scope = {};
        _$controller_('filmsearchController', {
            $scope: $scope
        });
    }));
    
    it('should pass', () =>{
        expect(true).toEqual(true);
    });
    
    it('should have correct initial results', () => {
       expect($scope.results.length).toEqual(2);
       expect($scope.results[0]).toEqual('Fake A');
       expect($scope.results[1]).toEqual('Fake B');        
    });
    
    it('should have a click function', () => {
       $scope.events.click(); 
    });
});