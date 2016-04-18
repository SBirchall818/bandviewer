/// <reference path="../../typings/main.d.ts" />

module app{
        var nameApp = angular.module('app');
        
        interface INameCtrlScope extends ng.IScope{
            names: string[];
            addName(): void;
            enteredName: string;
            events: NameCtrl;
        }
        
        class NameCtrl{
            scope: INameCtrlScope;
            
            static $inject = ['$scope'];
            
            constructor(public $scope: INameCtrlScope){
                this.scope = $scope;                
                $scope.events = this;
                
                $scope.names = ['Larry', 'Curly', 'Moe'];                
            }
            
            addName(){
                this.scope.names.push(this.scope.enteredName);
                this.scope.enteredName = '';
            }
        }
        
        
        nameApp.controller('NameCtrl', NameCtrl);
}  