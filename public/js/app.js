'use strict';


// Declare app level module which depends on filters, and services

var app = angular.module('myApp', ['myApp.filters', 'myApp.directives','myApp.controllers','ngSanitize'])
	.value('version', 'app version : 1.0');
