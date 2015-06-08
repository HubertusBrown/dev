'use strict';

function team(teamName) {

  var teamMembers = [];
  var project = null;


  function addMember(member) {
    if (hasMember(member)) {
      return false;
    } else {
      teamMembers.push(member);
    }
  }

  function removeMember(member) {
    var index = teamMembers.indexOf(member);
    if (index >= 0) {
      teamMembers.splice(index, 1);
    }
  }

  function getMembers() {
    return teamMembers;
  }

  function getMemberCount() {
    return teamMembers.length;
  }

  function setProject(value) {
    project = value;
  }

  function getProject() {
    return project;
  }


  function getTeamName() {
    return teamName;
  }

  function hasMember(member) {
    return teamMembers.indexOf(member) >= 0;
  }

  return {
    addMember: addMember,
    removeMember: removeMember,
    getMembers: getMembers,
    getMemberCount: getMemberCount,
    setProject: setProject,
    getProject: getProject,
    getTeamName: getTeamName,
    hasMember: hasMember
  }
}



