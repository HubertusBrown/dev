'use strict';

describe('team panel directive test suite', function () {

    var scope;
    var createTeamSpy;
    var windowAlertSpy;

    beforeEach(function () {
        module('devApp');

    });

    beforeEach(inject(function ($controller, $rootScope, teamService) {
        scope = $rootScope.$new();

        createTeamSpy = sinon.spy(teamService, 'createTeam');

        $controller('TeamPanelController', {
            $scope: scope,
            teamService: teamService
        });
    }));


    it('should call createTeam in teamService - spy', inject(function () {
        scope.newTeamName = 'A';
        scope.createTeam(scope.newTeamName);
        expect(createTeamSpy).to.have.been.calledWith('A');
        expect(createTeamSpy).to.not.have.been.calledWith('b');
        expect(scope.newTeamName).to.be.empty;
    }));

    it('should print alert when trying to create team with name as existing team - spy', inject(function ($window) {
        windowAlertSpy = sinon.spy($window, 'alert');
        scope.createTeam('A');
        scope.createTeam('A');
        expect(createTeamSpy).to.have.been.calledTwice;
        expect(windowAlertSpy).to.have.been.called;
    }));

    it('should print alert when trying to create team with name as existing team - stub', inject(function (teamService) {
        var errorMessage = 'Team already created';
        createTeamSpy.restore();

        //creating stub instead of spy - name has not been changed to show the effects of restore()
        createTeamSpy = sinon.stub(teamService, 'createTeam').throws(new Error(errorMessage));
        scope.createTeam('A');
        expect(createTeamSpy).to.have.been.called;
        expect(windowAlertSpy).to.have.been.calledWith(errorMessage);
    }));


});
