'use strict';

describe('team panel directive test suite', function () {

    var teamPanelDirective;
    var compiledTeamPanelDirective;
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
        teamPanelDirective = angular.element("<team-panel></team-panel>");

        compiledTeamPanelDirective = $compile(teamPanelDirective)(scope);
        scope.$digest();
    }));

    it('should process and apply the template', function () {
        expect(compiledTeamPanelDirective.html()).not.to.equal('');
    });



    it('should create team-display directive in team-panel when there is a team', inject(function (teamService) {
        // we create array of teams for the stub below
        var teams = [team('A Team')];

        // we create a stub so we isolate the test and do not test teamService, only the behaviour of the directive
        sinon.stub(teamService, 'getTeams').returns(teams);

        // we apply the changes (this is done automatically by angular, but in tests we need to do it manually)
        scope.$digest();

        // we want to check if the team was displayed, so we look for this:
        //<div ng-repeat="team in getTeams()">
        //    <team-display data-team="team"></team-display>
        //</div>
        expect(compiledTeamPanelDirective.find('team-display').length).to.equal(1);

    }));


});
