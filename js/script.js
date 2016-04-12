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
    SLOGAN_SUB: 'Organized on behalf of the cultural week of African Network Of heilbronn',
    ABOUT: {
    	TITLE: 'About African Network Of Heilbronn',
    	CONTENT: 'We are a student association of the University of Heilbronn, which represented by African students from different countries is (our board). These range from Cameroon, Nigeria, Kenya, Ghana, Congo, Morocco, Togo, Ivory Coast, Bukina Faso and many more. Our job is to assist African students inside and outside the study. Together we organize and plan various events at Heilbronn University. We form a kind of second family in which we encourage each other and give courage. With this short insight into our activities, we hope you enjoy our website.'
    },
    SPEAKERS: {
    	CONTENT: 'For this evening of Friday, 29.04, are invited the following speakers'
    }
  });
  $translateProvider.translations('de', {
    TITLE: 'Podiumdiskussion',
    NAVBAR: {
    	ABOUT: 'Über uns',
    	WHO: 'Speakers',
    	CONTACT: 'Reservieren'
    },
    SLOGAN: 'Heilbronn: eine nützliche Diaspora',
    SLOGAN_SUB: 'Organisiert im Auftrag der Kulturwoche von African Network of Heilbronn',
    ABOUT: {
    	TITLE: 'Über African Network Of Heilbronn',
    	CONTENT: 'Wir sind ein studentischer Verein der Hochschule Heilbronn, welcher durch afrikanische Studenten aus verschiedenen Ländern vertreten ist (unsere Vorstand). Diese reichen von Kamerun, über Nigeria, Kenia, Ghana, Kongo, Marokko, Togo, Elfenbeinküste, Bukina Faso und viele weitere. Unsere Aufgabe ist es afrikanische Studenten innerhalb und außerhalb des Studiums zu unterstützen. Zusammen organisieren und gestalten wir verschiedene Veranstaltungen an der Hochschule Heilbronn. Wir bilden eine Art zweite Familie in der wir uns gegenseitig anspornen und Mut machen. Mit diesem kurzen Einblick in unsere Tätigkeit wünschen wir Ihnen viel Spaß auf unserer Homepage.'
    },
    SPEAKERS: {
    	CONTENT: 'Für diesen Abend von Freitag, 29.04, werden die folgenden Referenten eingeladen'
    }
  });
  $translateProvider.translations('fr', {
    TITLE: 'Forum de discussion',
    NAVBAR: {
    	ABOUT: 'A propos',
    	WHO: 'Speakers',
    	CONTACT: 'Reservez'
    },
    SLOGAN: 'Heilbronn: Une diaspora utile',
    SLOGAN_SUB: 'Organisé pour le compte de la semaine culturelle de l\'African Network Of heilbronn',
   	ABOUT: {
    	TITLE: 'A propos de l\'African Network Of Heilbronn',
    	CONTENT: 'Nous sommes une association étudiante de l\'Université de Heilbronn, qui est représentée par des étudiants africains de différents pays (notre conseil d\'administration). Celles-ci vont du Cameroun, Nigeria, Kenya, Ghana, Congo, Maroc, Togo, Côte-d\'Ivoire, Bukina Faso et beaucoup plus. Notre travail consiste à aider les étudiants africains à l\'intérieur et à l\'extérieur des études. Ensemble, nous organisons et planifions divers événements à l\'Université Heilbronn notamment la semaine culturelle. Nous formons une sorte de seconde famille dans laquelle nous nous encourageons mutuellement et nous donnons du courage.'
    },
    SPEAKERS: {
    	CONTENT: 'Pour cette soirée du vendredi 29.04, sont invités les intervenants suivants'
    }
  });
  $translateProvider.preferredLanguage('de');
});
