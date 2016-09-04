angular.module('myDirective',[])
    .directive('topheader',function(){
      return{
        restrict:'E',
        templateUrl:'view/topHeader.html',
        scope:true
      };
    });