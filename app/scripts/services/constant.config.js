function formatFunction(content, arguments) {
  for (var i = 0; i < arguments.length; i++) {
    var remplacement = '{' + i + '}';
    content = content.replace(remplacement, arguments[i]);
  }
  return content;
}


'use strict';

/**
 * @ngdoc service
 * @name bd2ClientApp.constant.config
 * @description
 * # constant.config
 * Constant in the bd2ClientApp.
 */
angular.module('bd2ClientApp')
  .constant('constantConfig', {
    serverIp: 'http://localhost:8089',
    errorDeatailTemplate: '.<a ng-click="{0}" style="color: #fff; text-decoration: underline">Detalles del mensaje</a>',
    formatFunction: formatFunction
  });
