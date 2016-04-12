angular.module('podium', ['pascalprecht.translate']);

angular.module('podium').config(function($translateProvider) {
	$translateProvider.translations('en', {
    TITLE: 'Discussion Forum',
    NAVBAR: {
    	ABOUT: 'Über uns',
    	WHO: 'Speakers',
    	CONTACT: 'book a place'
    },
    SLOGAN: 'Heilbronn: an useful diaspora',
    SLOGAN_SUB: 'Organized on behalf of the cultural week of African Network Of heilbronn'
  });
  $translateProvider.translations('de', {
    TITLE: 'Podiumdiskussion',
    NAVBAR: {
    	ABOUT: 'Über uns',
    	WHO: 'Speakers',
    	CONTACT: 'Reservieren'
    },
    SLOGAN: 'Heilbronn: eine nützliche Diaspora',
    SLOGAN_SUB: 'Organisiert im Auftrag der Kulturwoche von African Network of Heilbronn'
  });
  $translateProvider.translations('fr', {
    TITLE: 'Forum de discussion',
    NAVBAR: {
    	ABOUT: 'A propos',
    	WHO: 'Speakers',
    	CONTACT: 'Reservez'
    },
    SLOGAN: 'Heilbronn: Une diaspora utile',
    SLOGAN_SUB: 'Organisé pour le compte de la semaine culturelle de l\'African Network Of heilbronn'
  });
  $translateProvider.preferredLanguage('de');
});
