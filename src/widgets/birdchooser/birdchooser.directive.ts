/// <reference path="../../../typings/main.d.ts" />
/// <reference path="bird.ts" />

// Using typescript classes does not benefit us much because the directive
// logic is designed not to be exposed to other components.
// We can get away with just using an IIFE pattern here.

module widgets.birdchooser{
    'use strict';
    
    interface IBirdChooserScope extends ng.IScope{
        birds: Bird[];
        text: string;
        picclick(index: number): void;
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
            
            scope.birds = new Array<Bird>();
            scope.birds.push(new Bird('http://www.lpzoosites.org/artd/resources/species/168/akepa%20male%20%2310.jpg', 'Akepa is a cool bird' ));
            scope.birds.push(new Bird('https://upload.wikimedia.org/wikipedia/commons/d/d1/Portrait_of_a_Golden_Pheasant.JPG', 'I am a Golden Pheasant' ));
            scope.birds.push(new Bird('http://www.nerjarob.com/nature/wp-content/uploads/Nicobar-Pigeon-Aug28th-1.jpg', 'The Nicobar Pidgeon will mess you up'));
            scope.birds.push(new Bird('http://3.bp.blogspot.com/-QgYpAt_rXoA/UgxjbjNPmxI/AAAAAAAAOfk/OY-rpJd5XoQ/s1600/1a.jpg', 'I do not even know what this Bird is'));
            scope.birds.push(new Bird('https://s-media-cache-ak0.pinimg.com/236x/c7/43/bb/c743bb470befae81f68370011b78f3c4.jpg', 'It aint no lady bird'));
            
            
            scope.text = 'Default Text';
            
            scope.picclick = (index: number): void => {
                scope.text = scope.birds[index].text;
            };
        }
        
        return directive;
    }
}