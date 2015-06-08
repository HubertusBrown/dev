'use strict';

describe('team', function () {

    var sampleTeam;
    var teamName = 'someName';

    beforeEach(function () {
        sampleTeam = team(teamName);
    });

    it('should check if team has no members on initialization', function () {
        expect(sampleTeam.getMembers()).to.be.empty;
    });

    it('should check if team has no project assigned on initialization', function () {
        expect(sampleTeam.getProject()).to.be.null;
    });

    it('should check if team has proper name', function () {
        expect(sampleTeam.getTeamName()).to.be.deep.equal(teamName);
    });

    it('should add member to the team', function () {
        var member = {name: "John"};
        sampleTeam.addMember(member);

        expect(sampleTeam.getMemberCount()).to.be.equal(1);
        expect(sampleTeam.getMembers()).to.contain(member);
    });

    it('should remove member to the team', function () {
        var memberJohn = {name: "John"};
        var memberMary = {name: "Mary"};
        sampleTeam.addMember(memberJohn);
        sampleTeam.addMember(memberMary);

        expect(sampleTeam.getMemberCount()).to.be.equal(2);
        expect(sampleTeam.getMembers()).to.contain(memberJohn);
        expect(sampleTeam.getMembers()).to.contain(memberMary);

        sampleTeam.removeMember(memberJohn);

        expect(sampleTeam.getMemberCount()).to.be.equal(1);
        expect(sampleTeam.getMembers()).not.to.contain(memberJohn);
        expect(sampleTeam.getMembers()).to.contain(memberMary);
    });

    it('should not be able to remove non assigned member', function () {
        var memberJohn = {name: "John"};
        var memberMary = {name: "Mary"};

        expect(sampleTeam.getMembers()).not.to.contain(memberMary);

        sampleTeam.removeMember(memberMary);
        expect(sampleTeam.getMembers()).to.be.empty;

        sampleTeam.addMember(memberJohn);
        expect(sampleTeam.getMemberCount()).to.be.equal(1);

        sampleTeam.removeMember(memberMary);
        expect(sampleTeam.getMemberCount()).to.be.equal(1);
        expect(sampleTeam.getMembers()).not.to.contain(memberMary);

    });

    it('should check if member is assigned to the team', function () {
        var memberJohn = {name: "John"};
        var memberMary = {name: "Mary"};
        sampleTeam.addMember(memberJohn);

        expect(sampleTeam.hasMember(memberJohn)).to.be.true;
        expect(sampleTeam.hasMember(memberMary)).to.be.false;
    });

});
