'use strict';

describe('team display directive test suite', function () {

    var teamDisplayDirective;
    var compiledTeamDisplayDirective;
    var scope;


    beforeEach(function () {
        module('devApp');

    });

    // Templates need to be compiled to javascript for karma to be able to use them.
    // In karma configuration see 'ngHtml2JsPreprocessor'
    // http://tylerhenkel.com/how-to-test-directives-that-use-templateurl/
    // http://essenceofcode.com/2014/05/27/testing-templated-angularjs-directives/
    beforeEach(function () {
        module('templates');
    });

    beforeEach(inject(function ($compile, $rootScope) {
        scope = $rootScope.$new();

        var sampleTeam = team("Tiger");
        sampleTeam.setProject(project("Some Project"));
        scope.sampleTeam = sampleTeam;
        teamDisplayDirective = angular.element("<team-display team='sampleTeam'></team-display>");

        compiledTeamDisplayDirective = $compile(teamDisplayDirective)(scope);
        scope.$digest();
    }));




    it('should create team-display directive with team passed as variable', function () {
        // we get reference to the directive's scope
        var isolatedScope = compiledTeamDisplayDirective.isolateScope();

        // we check the directive's scope if the sampleTeam was assigned to team variable in the scope
        expect(isolatedScope.team.getTeamName()).to.be.equal('Tiger');
    });

    it('should delete team by clicking on a delete button', inject(function (teamService) {
        var foundButtons = compiledTeamDisplayDirective.find('button');

        var deleteTeamStub = sinon.stub(teamService, 'deleteTeam');

        expect(foundButtons.length).to.be.equal(1);


        expect(deleteTeamStub).to.not.have.been.called;
        foundButtons[0].click();
        expect(deleteTeamStub).to.have.been.called;

    }));


});
