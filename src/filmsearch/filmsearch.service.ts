/// <reference path="../../typings/main.d.ts" />
/// <reference path="queryResponse.ts" />

module filmsearch{
    'use strict';
    
    export interface IFilmsearchService{
        search(query: string): ng.IPromise<QueryResponse>;
    }
    
    class FilmsearchService implements IFilmsearchService{
        static $inject = ['$http'];
        
        constructor(public $http: ng.IHttpService){
            
        }
        
        search(query: string){
            var api: string = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&r=json";
            return this.$http.get(api)
                .then((response: any) => {
                    var result = new QueryResponse(response.data.Language, response.data.Poster);
                    return result;
                }, (reason: string) =>{
                    return reason;
                });
        }
    }
    
    angular
        .module('app')
        .service('filmsearch.service', FilmsearchService);
}