/* 
    app.js
    Angular application for the address book challenge

 */

"use strict";

angular.module('AddressBook', [])
    .controller('AddressController', function($scope) {
        $scope.employees = pawneeEmployees;
        $scope.order = 'lastName';
        $scope.searchString = '';

        $scope.sortBy = function(colName) {
            $scope.order = colName;
        };
     }
);