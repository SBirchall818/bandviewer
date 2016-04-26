/// <reference path="../../../typings/main.d.ts" />

// Using typescript classes does not benefit us much because the directive
// logic is designed not to be exposed to other components.
// We can get away with just using an IIFE pattern here.

module widgets.birdchooser{
    'use strict';
    
    interface IBirdChooserScope extends ng.IScope{
        urls: string[];
    }
    
    angular.module('app')
        .directive('birdchooser', birdchooser);
    
    function birdchooser(): ng.IDirective {
        var directive = <ng.IDirective>{
            restrict: 'E',
            link: link,
            templateUrl: '../../../../widgets/birdchooser/birdchooser.view.html',
            
        };
        
        function link(scope: IBirdChooserScope, element: ng.IAugmentedJQuery): void {
            element.on('blur', (): void => {
                
            });
            
            scope.urls = new Array();
            scope.urls.push('http://www.lpzoosites.org/artd/resources/species/168/akepa%20male%20%2310.jpg');
            scope.urls.push('https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_of_a_Golden_Pheasant.JPG');
            scope.urls.push('http://www.nerjarob.com/nature/wp-content/uploads/Nicobar-Pigeon-Aug28th-1.jpg');
            scope.urls.push('http://3.bp.blogspot.com/-QgYpAt_rXoA/UgxjbjNPmxI/AAAAAAAAOfk/OY-rpJd5XoQ/s1600/1a.jpg');
            scope.urls.push('https://s-media-cache-ak0.pinimg.com/236x/c7/43/bb/c743bb470befae81f68370011b78f3c4.jpg');
        }
        
        return directive;
    }
}