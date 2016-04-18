// /// <reference path="../../typings/main.d.ts" />
// /// <reference path="filmsearch.service.ts" />

// module filmsearch{
//     'use strict';
    
//     interface IFilmsearchScope{
//         $scope: ng.IScope,
//         results: string[];
//         search(filmname: string): void;
//     }
    
//     class FilmsearchController implements IFilmsearchScope{
//         results: string[];
        
//         queryname: string = 'Default Query Name';
        
//         static $inject = [
//             '$scope',
//             'filmsearch.service'];
        
//         constructor(
//             public $scope: ng.IScope,
//             private filmsearchService: IFilmsearchService){
//             var vm = this;
//             vm.results = [];
//             vm.click = this.click;
//         }
        
//         search(filmname: string){
//             this.filmsearchService.search(filmname)
//                 .then((): void =>{
//                     this.results.push('Example result');
//                 })
//         }
        
//         click(){
//             console.log('Click registered');
//         }
//     }
    
//     angular
//         .module('app')
//         .controller('filmsearchController', FilmsearchController);
// }