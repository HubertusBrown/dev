#DevTest

In client/components/team you can find .spec.js files - these are tests.
Run 'grunt start' to see what you are testing :)
Run 'grunt karma:dev' or 'grunt karma:ci' (for jenkins - contains coverage in the output folder) to run tests.

Basics:
team.Spec.js - testing javaScript functions
team-service.Spec.js - testing Services

Advanced:
team-panel-controller.Spec.js - testing controller that uses service - we mock service behavior
team-panel-directive.Spec.js - testing directives
team-display-directive.spec.js - testing directives - testing different things


REMINDER:

KARMA
Karma is our test runner.

MOCHA
We use mocha testing framework (for basic structure of test files and tests).
http://mochajs.org/

CHAI
We use chai assertion library (for checking results - expect, assert).
http://chaijs.com/api/bdd/

SINON
With sinon-chai (we use sinon to create spies, stubs, mocks - for mocking and checking mocks' behaviour).
http://chaijs.com/plugins/sinon-chai
http://sinonjs.org/docs/

Some links:
https://nicolas.perriault.net/code/2013/testing-frontend-javascript-code-using-mocha-chai-and-sinon/
http://blog.ninja-squad.com/2015/01/27/5-tricks-about-directives-and-tests/
http://www.sitepoint.com/unit-testing-angularjs-services-controllers-providers/
http://www.sitepoint.com/mocking-dependencies-angularjs-tests/
