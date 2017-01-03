'use strict';

var app = angular.module('mytimeline', [
	'ngSanitize',
  'ui.router',
  'angular-timeline',
	'angular-scroll-animate'
]);

app.config(function($stateProvider) {
  $stateProvider.state('user', {
    url:         '',
    controller: 'MytimelineCtrl',
    templateUrl: 'timeline-template.html'
  });
});
