/// <reference path="../../typings/main.d.ts" />

module app{
    'use strict';
    
    angular.module('app')
    .config(config);
    
    config.$inject = ["$routeProvider", "$locationProvider"];
    function config($routeProvider: ng.route.IRouteProvider, 
            $locationProvider: ng.ILocationProvider): void {
        $routeProvider.when('/View1', {
            templateUrl: '../../views/view1.html'
            // template: '<div>This is view 1</div>',
            // controller: (): void => {},
            // controllerAs: 'vm'
        }).when('/View2', {
            templateUrl: '../../views/view2.html'
            // template: '<div>This is view 2</div>',
            // controller: (): void => {},
            // controllerAs: 'vm'
        });
        
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!');
    }
}