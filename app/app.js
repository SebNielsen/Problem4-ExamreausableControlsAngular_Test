'use strict';

var app = angular.module('myApp', []);

app.controller('Controller', ['TitleService', function(TitleService){
    var self = this;
    self.person = {};
    self.showPerson = false;
    self.showTitleCase = false;
    self.showCamelCase = false;
    self.showDashCase = false;
    self.titleCase = "";
    self.camelCase = "";
    self.dashCase = "";
    self.TitleCase = function(){ return TitleService.getTitleCase(self.titleCase)};
    self.CamelCase = function(){ return TitleService.getCamelCase(self.camelCase)};
    self.DashCase = function(){ return TitleService.getDashCase(self.dashCase)};
}]);

app.service('TitleService', function(){
   var self = this;
   self.getTitleCase = function(title){
       var newTitle = "";
       var titleElements = title.split(" ");
       titleElements.forEach(function(element){
          var firstLetter = element.charAt(0).toUpperCase(); 
          newTitle = newTitle + firstLetter + element.substring(1) + " ";
       });
       return newTitle;
   };
   
   self.getCamelCase = function(title){
     var newTitle = "";
     var titleElements = title.split(" ");
     titleElements.forEach(function(element){
          var firstLetter = element.charAt(0).toUpperCase(); 
          newTitle = newTitle + firstLetter + element.substring(1);
       });
       return newTitle;
   };
   
   self.getDashCase = function(title){
       var newTitle = "";
       var titleElements = title.split(" ");
       for(var i = 0; i < titleElements.length; i++){
           if(i !== (titleElements.length-1)){
               newTitle = newTitle + titleElements[i] + "-";
           } else {
               newTitle = newTitle + titleElements[i];
           }
       }
       return newTitle;
   };
});


app.filter('name', function(){
   return function(input){
       var name = '"' +input.lastName + ", " + input.firstName + '"';
       return name;
   }; 
});

app.directive('loginForm', function(){
   return {
       templateUrl: 'login-form.html' 
   }; 
});

    
