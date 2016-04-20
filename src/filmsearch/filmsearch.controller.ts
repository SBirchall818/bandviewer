/// <reference path="../../typings/main.d.ts" />
/// <reference path="filmsearch.service.ts" />
/// <reference path="queryResponse.ts" />

module filmsearch{
    'use strict';
    
    export interface IFilmsearchScope extends ng.IScope{
        $scope: ng.IScope,
        results: string[];
        search(filmname: string): void;
        events: FilmsearchController;
    }
    
    class FilmsearchController{
        scope: IFilmsearchScope;
        filmsearchService: IFilmsearchService;
        
        results: string[];
        
        queryname: string = 'Default Query Name';
        
        static $inject = [
            '$scope',
            'filmsearchservice'];
        
        constructor(
            $scope: IFilmsearchScope,
            _filmsearchService_: IFilmsearchService){
            this.scope = $scope;
            this.filmsearchService = _filmsearchService_;
            $scope.events = this;            
            
            $scope.results = ['Fake A', 'Fake B'];            
        }
        
        search(filmname: string){
            this.filmsearchService.search(filmname)
                .then((response: QueryResponse): void =>{
                    this.scope.results.push(response.Language);
                })
        }
        
        click(){
            console.log('Click registered');
        }
    }
    
    angular
        .module('app')
        .controller('filmsearchController', FilmsearchController);
}