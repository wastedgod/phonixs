angular.module('MainScreenModule', [
]).component('mainScreenComponent', {
	scope: {},
	templateUrl: 'main-menu.html',
	controller: [function(){
		console.log('in main screen component controller');
	}]
});

angular.module('SpellingPracticeModule', [
	'ngRoute'
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.when(
		'/spelling-practice/create-a-word/',
		{
			template: '<create-a-word-component></create-a-word-component>'
		}
	).when(
		'/spelling-practice/spell-a-word',
		{
			template: '<spell-a-word-component></spell-a-word-component>'
		}
	).otherwise({
		template: '<spelling-practice-component></spelling-practice-component>'
	})
}]).component('spellingPracticeComponent', {
	scope: {},
	templateUrl: 'spelling-practice.html',
	controller: [function(){
		console.log('in spelling practice component');
	}]
}).component('spellAWordComponent', {
	scope: {},
	templateUrl: 'spell-a-word.html',
	controller: [function(){
		console.log('in spell a word controller');
	}]
}).component('createAWordComponent', {
	scope: {},
	templateUrl: 'create-a-word.html',
	controller: [function(){
		console.log('in create a word controller');
	}]
});

angular.module('LettersAndSoundsModule', [
]).config(['$routeProvider', function($routeProvider){
	$routeProvider.when(
		'/letters-and-sounds/find-the-letter',
		{
			template: '<find-the-letter></find-the-letter>'
		}
	).when(
		'/letters-and-sounds/letter-matching',
		{
			template: '<letter-matching></letter-matching>'
		}
	).when(
		'/letters-and-sounds/letters-and-sounds',
		{
			template: '<letters-and-sounds-sub-component></letters-and-sounds-sub-component>'
		}
	)
}]).component('lettersAndSoundsComponent', {
	scope: {},
	templateUrl: 'letters-and-sounds.html',
	controller: [function(){
		console.log('in letters and sounds controller');
	}]
}).component('findTheLetterComponent', {
	scope: {},
	templateUrl: 'find-the-letter.html',
	controller: [function(){
		console.log(' in find the letter controller');
	}]
}).component('letterMatchingComponent', {
	scope: {},
	templateUrl: 'letter-match.html',
	controller: [function(){
		console.log('in letter matching controller');
	}]
}).component('lettersAndSoundsSubComponent', {
	scope: {},
	templateUrl: 'letters-and-sounds-sub.html',
	controller: [function(){
		console.log('in letters and sounds sub controller');
	}]
});


angular.module('ExampleApp7', [
  'ngRoute',
  'mobile-angular-ui',
  'ExampleApp7.controllers.Main',
  'MainScreenModule',
  'LettersAndSoundsModule',
  'SpellingPracticeModule'
]).config(function($routeProvider) {
	console.log('in router');
	$routeProvider.when(
		'/spelling-practice', 
		{
			template: '<spelling-practice-component></spelling-practice-component>'
		}
	).when(
		'/letters-and-sounds',
		{
			template: '<letters-and-sounds-component></letters-and-sounds-component>'
		}
	)
	.otherwise({
		template: '<main-screen-component></main-screen-component>'
	});
	//$routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});