'use strict';

var app = angular.module('devApp');

app.factory('testerHelperService', [function () {

    var testerMode = true;

    var isTesterMode = function () {
        return testerMode;
    };


    return {
        isTesterMode: isTesterMode
    }

}]);
