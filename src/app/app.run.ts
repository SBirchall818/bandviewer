/// <reference path="../../typings/main.d.ts" />

module app{
    angular.module('app')
        .run(run);
        
    run.$inject = ['$rootScope', '$location'];
    function run($rootScope: ng.IRootScopeService,
                $location: ng.ILocationService){
        $rootScope.$on('$routeChangeError', (): void => {
            
        });
        
        $location.path('View1');
    }
}