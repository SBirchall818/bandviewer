describe('filmsearch controller', function(){
    
    var $scope;
    
    beforeEach(module('app'));
    
    beforeEach(inject(function(_$controller_) {
		$scope = {};
		_$controller_('filmsearchController', { 
			$scope: $scope 
		});
	}));
    
    
   it('should pass', function(){
       expect(true).toEqual(true);
   });
   
   it('should have correct initial results', function(){
       expect($scope.results.length).toEqual(2);
       expect($scope.results[0]).toEqual('Fake A');
       expect($scope.results[1]).toEqual('Fake B');
   });
   
   it('should have a click function', function(){
       $scope.events.click();
   });
});