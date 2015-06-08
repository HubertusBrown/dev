'use strict';

angular.module('devApp')
    .factory('teamService', function () {

        var teams = [];

        function createTeam(name) {
            if (getTeam(name)) {
                throw new Error('Team with name ' + name + ' already created.');
            } else {
                var newTeam = team(name);
                teams.push(newTeam);
            }
        }

        function deleteTeam(team) {
            var index = teams.indexOf(team);
            teams.splice(index, 1);
        }

        function assignMember(member, team) {
            if (isAssigned(member) && getTeamForDev(member) === team) {
                unassignMember(member);
            }
            for (var i = 0; i < teams.length; i++) {
                if (teams[i] === team) {
                    teams[i].addMember(member);
                }
            }
        }

        function getTeam(teamName) {
            for (var i = 0; i < teams.length; i++) {
                if (teams[i].getTeamName().toUpperCase() === teamName.toUpperCase()) {
                    return teams[i];
                }
            }
            return null;
        }

        function getTeams() {
            return teams;
        }

        function isAssigned(member) {
            for (var i = 0; i < teams.length; i++) {
                if (teams[i].hasMember(member)) {
                    return true;
                }
            }
            return false;
        }

        function unassignMember(member) {
            for (var i = 0; i < teams.length; i++) {
                if (teams[i].hasMember(member)) {
                    teams[i].removeMember(member);
                    return;
                }
            }
        }

        function getTeamForProject(project) {
            for (var i = 0; i < teams.length; i++) {
                if (teams[i].getProject() === project) {
                    return teams[i];
                }
            }
            return null;
        }

        function getTeamForDev(developer) {
            for (var i = 0; i < teams.length; i++) {
                if (teams[i].getMembers().indexOf(developer) >= 0) {
                    return teams[i];
                }
            }
            return null;
        }

        function assignProject(project, team) {
            if (getTeamForProject(project)) {
                unassignProject(project, teams);
            }
            team.setProject(project);
            project.setAssigned(true);
        }

        function unassignProject(project) {
            for (var i = 0; i < teams.length; i++) {
                if (teams[i].getProject() === project) {
                    teams[i].setProject(null);
                    project.setAssigned(false);
                }
            }
        }

        return {
            createTeam: createTeam,
            deleteTeam: deleteTeam,
            getTeams: getTeams,
            getTeam: getTeam,
            getTeamForProject: getTeamForProject,
            getTeamForDev: getTeamForDev,

            assignMember: assignMember,
            unassignMember: unassignMember,
            assignProject: assignProject,
            unassignProject: unassignProject
        }

    });
