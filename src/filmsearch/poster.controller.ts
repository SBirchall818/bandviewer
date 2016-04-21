/// <reference path="../../typings/main.d.ts" />

module filmsearch{
    'use strict';
    
    interface IPosterControllerScope extends ng.IScope{
        $scope: ng.IScope,
        events: PosterController;
        display: boolean;        
        url: string;        
        input: string;
    }
    
    class PosterController{
        scope: IPosterControllerScope;
        
        
        constructor($scope: IPosterControllerScope){
            this.scope = $scope;
            $scope.events = this;
            
            $scope.display = false;
            $scope.url = '';
            $scope.input = '';
        }
        
        click(): void{
            this.scope.display = !this.scope.display;
        }
    }
    
    angular
        .module('app')
        .controller('posterController', PosterController);
}