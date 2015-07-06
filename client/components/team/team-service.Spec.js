'use strict';

describe('teamService test suite', function () {

    var teamName = 'Tiger';

    beforeEach(function () {
        module('devApp');
    });

    it('should load team service', inject(function (teamService) {
        expect(teamService).to.be.defined;
        expect(teamService.createTeam).to.be.defined;
        expect(teamService.createMysticalGarden).not.to.be.defined;
    }));

    it('should have empty teams array', inject(function (teamService) {
        expect(teamService.getTeams()).to.be.empty;
    }));

    it('should create team and add it to teams array', inject(function (teamService) {
        teamService.createTeam(teamName);
        expect(teamService.getTeams().length).to.be.equal(1);
        expect(teamService.getTeam("TIGER")).to.be.defined;
    }));

    it('should not be able to add team with same name', inject(function (teamService) {
        teamService.createTeam(teamName);
        // the tested function is wrapped into another one (because we dont want to call the tested function)
        // http://stackoverflow.com/questions/14966821/testing-for-errors-thrown-in-mocha
        // http://chaijs.com/api/bdd/ (.throw section)
        expect(function () {
            teamService.createTeam(teamName)
        }).to.throw('Team with name ' + teamName + ' already created.');


    }));

});
