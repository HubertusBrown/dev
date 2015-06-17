'use strict';

describe('team panel directive test suite', function () {

    var teamPanelDirective;
    var scope;


    beforeEach(function () {
        module('devApp');

    });
    beforeEach(function () {
        module('templates');
    });

    beforeEach(inject(function ($compile, $rootScope) {


        scope = $rootScope.$new();
        teamPanelDirective = angular.element('<team-panel></team-panel>');

        $compile(teamPanelDirective)(scope);
        scope.$digest();
        //var controller = teamPanelDirective.controller("teamPanel");

    }));

    it('should', inject(function (teamService) {
        var teams = [team('A Team')];
        sinon.stub(teamService, 'getTeams').returns(teams);
        scope.$digest();
        var teamzz = teamPanelDirective.find("team-display");
        //console.log(teamzz[0]);
    }));

    it('should fail', function () {
        expect(true).to.be.false;
    })

});
