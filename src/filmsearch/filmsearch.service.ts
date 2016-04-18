// /// <reference path="../../typings/main.d.ts" />

// module filmsearch{
//     'use strict';
    
//     export interface IFilmsearchService{
//         search(query: string): ng.IPromise<string>;
//     }
    
//     class FilmsearchService implements IFilmsearchService{
//         static $inject = ['$http'];
        
//         constructor(private $http: ng.IHttpService){
            
//         }
        
//         search(query: string){
//             var api: string = "http://www.omdbapi.com/?t=" + query + "&y=&plot=short&r=json";
//             return this.$http.get(api)
//                 .then((response: any) => {
//                     return response.Title;
//                 }, (reason: string) =>{
//                     return reason;
//                 });
//         }
//     }
    
//     angular
//         .module('app')
//         .service('filmsearch.service', FilmsearchService);
// }