'use strict';

angular.module('devApp')
    .directive('teamPanel', function () {

        return {
            restrict: 'E',
            templateUrl: "components/team/team-panel.html",
            controller: 'TeamPanelController',
            scope: {}

        };


    })
    .controller('TeamPanelController', ['$scope', 'teamService', 'testerHelperService', function ($scope, teamService, testerHelperService) {

        $scope.isTesterMode = testerHelperService.isTesterMode;

        $scope.createTeam = function (name) {
            try {
                teamService.createTeam(name);
                $scope.newTeamName = '';
            } catch (err) {
                alert(err.message);

            }
        };

        $scope.setTeamName = function () {
            teamService.setName();
        };

        $scope.getTeams = function () {
            return teamService.getTeams();
        };

        $scope.addSampleTeam = function () {
            teamService.createTeam("Tiger");
        };
    }]);
