'use strict';

/**
 * @ngdoc overview
 * @name bd2ClientApp
 * @description
 * # bd2ClientApp
 *
 * Main module of the application.
 */
angular
  .module('bd2ClientApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ui.materialize',
    'md.data.table',
    'ui.router'
  ]);


  angular.module('bd2ClientApp').config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
$httpProvider.defaults.withCredentials = true;
delete $httpProvider.defaults.headers.common["X-Requested-With"];
$httpProvider.defaults.headers.common["Accept"] = "application/json";
$httpProvider.defaults.headers.common["Content-Type"] = "application/json";
      }
  ]);
