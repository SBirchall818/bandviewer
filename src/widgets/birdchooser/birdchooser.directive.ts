/// <reference path="../../../typings/main.d.ts" />

// Using typescript classes does not benefit us much because the directive
// logic is designed not to be exposed to other components.
// We can get away with just using an IIFE pattern here.

((): void => {
    'use strict';
    
    angular.module('app')
        .directive('birdchooser', birdchooser);
    
    function birdchooser(): ng.IDirective {
        var directive = <ng.IDirective>{
            restrict: 'E',
            // link: link,
            templateUrl: '../../../../widgets/birdchooser/birdchooser.view.html'
        };
        
        function link(scope: ng.IScope, element: ng.IAugmentedJQuery): void {
            element.on('blur', (): void => {
                
            });
        }
        
        return directive;
    }
})();