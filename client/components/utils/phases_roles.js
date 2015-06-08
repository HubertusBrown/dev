'use strict';

var Phases = {

    ANALYSIS : "Analysis",
    DOCUMENTATION : "Documentation",
    IMPLEMENTATION: "Implementation",
    TESTING: "Testing"

};

Phases.array = [Phases.ANALYSIS, Phases.DOCUMENTATION, Phases.IMPLEMENTATION, Phases.TESTING];


function role(name, phases, description) {


    function getName() {
        return name;
    }

    function getPhases() {
        return phases;
    }

    function getDescription() {
        return description;
    }


    return {
        getName: getName,
        getPhases: getPhases,
        getDescription: getDescription
    }

}

var Roles = {
    ALL_AROUND: role("All-around", [[Phases.ANALYSIS, 0.25], [Phases.DOCUMENTATION, 0.25], [Phases.IMPLEMENTATION, 0.25], [Phases.TESTING, 0.25]], "All around guy"),
    ANALYST: role("Analyst", [[Phases.ANALYSIS, 1]], "Blab"),
    DOCUMENTATOR: role("Documentator", [[Phases.DOCUMENTATION, 1]], "Docu docu om nom nom")


};
Roles.array = [Roles.ALL_AROUND, Roles.ANALYST, Roles.DOCUMENTATOR];
