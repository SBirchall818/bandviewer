/// <reference path="../../../typings/main/ambient/jasmine/index.d.ts" />
/// <reference path="../../../typings/main/ambient/angular-mocks/index.d.ts" />

describe('MovieApp example directive', function () {
    
    var result = {
      Poster: 'http://localhost/image.jpg',
      Title: 'Star Wars: Episode IV - A New Hope',
      Director: 'George Lucas',
      Actors: 'Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing',
      Released: '25 May 1977',
      Genre: 'Action, Adventure, Fantasy',
      Plot: 'A young boy from Tatooine sets out on an adventure with an old Jedi named Obi-Wan Kenobi as his mentor to save Princess Leia from the ruthless Darth Vader and Destroy the Death Star built by the Empire which has the power to destroy the entire galaxy.'
    };

    var expectedHtml = [
      '<div class="col-sm-4">',
        	'<img ng-src="http://localhost/image.jpg" alt="Star Wars: Episode IV - A New Hope" width="220" src="http://localhost/image.jpg">',
        '</div>',
        '<div class="col-sm-8">',
            '<h3 class="ng-binding">Star Wars: Episode IV - A New Hope</h3>',
            '<p class="ng-binding">A young boy from Tatooine sets out on an adventure with an old Jedi named Obi-Wan Kenobi as his mentor to save Princess Leia from the ruthless Darth Vader and Destroy the Death Star built by the Empire which has the power to destroy the entire galaxy.</p>',
            '<p class="ng-binding"><strong>Director:</strong> George Lucas</p>',
            '<p class="ng-binding"><strong>Actors:</strong> Mark Hamill, Harrison Ford, Carrie Fisher, Peter Cushing</p>',
            '<p class="ng-binding"><strong>Released:</strong> 25 May 1977</p>',
            '<p class="ng-binding"><strong>Genre:</strong> Action, Adventure, Fantasy</p>',
		  '</div>'
	  ].join('');
      
      
    var $compile;
    var $rootScope;
    var $httpBackend;
    
    
    beforeEach(module('app'));
    
    beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $httpBackend = _$httpBackend_;
    }));
    
    it('should pass', function () {
        expect(true).toEqual(true);
    });
    
    it('should display bird info to the expected HTML format', function(){
        $httpBackend.expect('GET', '../../views/view1.html')
            .respond(200);
            
        var scope = {};
        $rootScope.result = result;
        var element = $compile('<movie-result result="result"></movie-result')($rootScope);
        $rootScope.$digest();
        console.log('Dump of element is:');
        console.log(dump(element));
        var html = element.html();
        console.log('HTML is:');
        console.log(html);
        expect(html).toBe('<div class="ng-binding">Star Wars: Episode IV - A New Hope</div>');
    });
});