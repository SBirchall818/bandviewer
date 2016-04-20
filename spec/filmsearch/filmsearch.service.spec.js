describe('filmsearch service', function(){
    
   var $httpBackend;
   var filmsearchservice;
   var query = 'frozen';
   var queryUrl = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&r=json";
   
   beforeEach(module('app'));
   
   beforeEach(inject(function(_filmsearchservice_, _$httpBackend_) {
	   $httpBackend = _$httpBackend_;
       filmsearchservice = _filmsearchservice_;
	}));
    
    afterEach(function() {
		// $httpBackend.verifyNoOutstandingExpectation();
		// $httpBackend.verifyNoOutstandingRequest();
	})
    
    it('should be able to access the search function', function(){
        filmsearchservice.search('Words');
    });
    
    it('should call some data', function(){
        
        var serverResponse = {"Title":"Undefined","Year":"2006","Rated":"NOT RATED","Released":"21 Oct 2006","Runtime":"63 min","Genre":"Drama","Director":"Bryant Dameron, Jacob Dodd","Writer":"Bryant Dameron, Jacob Dodd","Actors":"Ralph Cooley, Phillip Enriquez, Gregory Labenz, Amy MacDonald","Plot":"An unfortunate accident sets in motion a path of change for Nathanial Cane as he attempts to recover from substance abuse. A mentally unstable psychiatrist, DR. Henry Calhoon is tipping ...","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"N/A","imdbVotes":"N/A","imdbID":"tt1436480","Type":"movie","Response":"True"};
        
        var queryResponse = new filmsearch.QueryResponse('English', "http://ia.media-imdb.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg");
        
        $httpBackend.when('GET', queryUrl)
            .respond(200, serverResponse);
            
        $httpBackend.expect('GET', '../../views/view1.html')
            .respond(200);
            
        console.log('Calling search');
        filmsearchservice.search('frozen')
            .then(function(returned){
                console.log('Calling promise callback');
                expect(returned).toEqual(queryResponse);
            });
           
        $httpBackend.flush(); 
        // expect($httpBackend.flush).not.toThrow();
    });
     
});