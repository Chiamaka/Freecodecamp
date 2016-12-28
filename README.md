# Freecodecamp
Freecodecamp frontend certificate exercises
___
## Wikipedia Viewer
A project built with HTML, CSS([Semantic UI]('http://semantic-ui.com/')), JavaScript and the [Official Wikipedia API]('https://www.mediawiki.org/wiki/API:Main_page').

* Make sure you have Node, Npm and Yarn installed on your local machine
### Getting Started with it
1. Clone the repo
2. Go into wikipediaViewer directory using ```cd wikipediaViewer```
3. Run ```yarn install```
4. Run ```yarn run lite-server``` to run the project on `localhost:3000`

You can make changes to it and totally make it yours. Happy coding!

___
#Learnings
* var hoists to the top of its scope
* The `this` keyword is only operational in the 1st function scope, after that, you either assign to a variable or bind
* The confusion with the `this` keyword happens because any function created with the `function` keyword has its own `this` object created with it and when nested functions are in play, the context of the `this` of the inner function overrides the outer function.
* Arrow function has no knowledge of the `this` keyword so it kind of inherits the `this` object from its surrounding function. It was created cos of the conflict the `this` object creates when nested functions are used.
* InnerHTML constructs HTML on the page where it was inserted
* InnerText just inserts raw text into where was specified
###Questions
1. Difference in behaviour between var and let
###Answers
1.  var is function scope/global when defined outside a function WHILE let is block scope.
var hoists to the top of the scope WHILE let doesn't
