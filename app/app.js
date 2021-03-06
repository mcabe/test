/**
 * Created by Kris on 3/21/2016.
 */


var app = angular.module('app', [
    'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state({
            name: 'root',
            url: '',
            abstract: true,
            views: {
                'topbar': {
                    templateUrl: 'app/views/topbar.html',
                    controller: 'TopbarCtrl',
                    controllerAs: 'topbar'
                },
				'footer': {
					templateUrl: 'app/views/footer.html',
					controller: 'FooterCtrl',
					controllerAs: 'footer'
				}
            }
        })
        .state({
            name: 'root.home',
            url: '/',
            views: {
                'container@': {
                    templateUrl: 'app/views/home.html',
                    controller: 'MainCtrl',
                    controllerAs: 'main'
                }
            }
        })
        .state({
            name: 'root.options',
            url:'/options',
            views: {
                'container@': {
                    templateUrl: 'app/views/options.html',
                    controller: 'OptionsCtrl',
                    controllerAs: 'options'
                }
            }
        })
        .state({
            name: 'root.about',
            url:'/about',
            views: {
                'container@': {
                    templateUrl: 'app/views/about.html',
                    controller: 'AboutCtrl',
                    controllerAs: 'about'
                }
            }
        })
        .state({
            name: 'root.publications',
            url:'/publications',
            views: {
                'container@': {
                    templateUrl: 'app/views/publications.html',
                    controller: 'PublicationsCtrl',
                    controllerAs: 'publications'
                }
            }
        });

    $urlRouterProvider.otherwise('/');

	$locationProvider.html5Mode(true);
});

app.controller('TopbarCtrl', function($scope, $window) {
    var vm = this;
	
    vm.links = [
        {name: 'FORSIDE', url:'root.home', active: true},
        {name: 'TILBUD', url: 'root.options', active: false},
        {name: 'OM MIG', url:'root.about', active: false},
        {name: 'PUBLIKATIONER', url:'root.publications', active: false}
    ];
    vm.showMenu = false;
    vm.showMenuFunc = showMenuFunc;

    init();

    function showMenuFunc(name) {
        vm.showMenu = false;
        for(var i = 0; i < vm.links.length; i++) {
			vm.links[i].active = (name == vm.links[i].name);
		}
    }

    function init() {

    }

});

app.controller('FooterCtrl', function($scope) {
	var vm = this;

	init();

	function init() {
		$(document).foundation();
	}
});

app.controller('MainCtrl', function($scope) {
    var vm = this;
	
	vm.expandText = false;
	
	init();
	
	function init() {

	}

});

app.controller('OptionsCtrl', function($scope) {
   var vm = this;
	
	vm.optionsList = [
		{
			title: "Samtaler",
			text: "Samtaler/psykoterapi med voksne, unge og familier mht. problemstillinger i hverdagen som er svære at leve med, og som du/I har svært ved at komme videre med. Problemstillingerne kan have mange udtryk og navne: tristhed, usikkerhed, stress, relationer der ikke fungerer, problematikker i forhold til skole, uddannelse eller arbejde, tilbage til arbejdet efter sygdom m.m. Det gælder også problemstillinger i forhold til traumatiske begivenheder og tab i relation til arbejde eller øvrige hverdag. Samtaler/psykoterapi hos mig har som mål i samarbejde at undersøge og skabe mening i hverdagen, der kan give nye resurser til at arbejde med problemstillingerne.",
			active: false
		},
		{
			title: "Supervision",
			text: "Individuel supervision af psykologer o.a. fagpersoner på børne- ungeområdet. Supervision til psykologer med henblik på autorisation. Individuel supervision af ledere på børne- og ungeområdet. Supervisionen kan tage udgangspunkt i en konkret problemstilling eller i et behov for udviklingsforløb. Jeg tilbyder desuden en særlig for supervision, jeg kalder: Tema-/ videns-supervision. Det er en kombination af oplæg og supervision m.h.t. udvikling af et teoretisk/begrebsligt grundlag for et professionelt arbejde (individuelt/gruppe).",
			active: false
		},
		{
			title: "Oplæg/foredrag/undervisning",
			text: "Jeg kan tilbyde oplæg/foredrag/og undervisning – evt. som del af temadag o.l. i PPR/Børneungerådgivning/institution. Emnet og sammenhæng aftales i dialog.",
			active: false
		}
	];
	
	init();
	
	function init() {
	}
});

app.controller('AboutCtrl', function($scope) {
    var vm = this;

	vm.aboutList = [
		{
			title: "Tilgang",
			text: "Forskning viser, at såvel psykoterapi som supervision virker, når den aktivt kan overføres og bruges i dagligdagens sammenhænge og situationer. Jeg arbejder med forskellige fremgangsmåder og redskaber i samtaler og supervision og forskningen viser at forandring sker i den aktive brug af erfaringer fra samtaler/supervision i dagligdagens mange komplekse situationer og hændelser. Det er denne aktive kobling mellem samtale og hverdag, jeg prøver at understøtte – sammen med dig/jer – med henblik at skabe de små eller store ændringer mod mere mening, glæde og styrke m.m.",
			active: false
		},
		{
			title: "Erfaringer",
			text: "Jeg har over 30 års erfaring som psykolog i flere forskellige positioner: Psykolog i voksenpsykiatrien, klinisk psykolog på børne- og familieområdet, forsker og underviser, og som leder og chef af PPR og en Børne- Ungeafdeling. Jeg har her ud fra viden og erfaring m.h.t. mange problemstillinger i livet.",//, såvel i arbejdslivet som Jeg forsøger at se problemstillinger i en helhed: energi, styrke og konkrete ideer til løsninger udvikles kun ved at forbinde og skabe forbindelse mellem dele og relationer i ens liv og dagligdag.",
			active: false
		}
	];

	init();

	function init() {
	}
});

app.controller('PublicationsCtrl', function($scope) {
    var vm = this;

	vm.goTo = goTo;

	vm.publicationsList = [
		{
			id: 1,
			title: "Mening og betydning i fællesskaber – et dramatisk arbejde.",
			journal: "Kognition og Pædagogik, temanummer efterår",
			year: "2015",
			isActive: false,
			link: "http://www.maini.me/olearticles/"
		},
		{
			id: 2,
			title: "En Børne- og ungerådgivning og PPR – ”just in time”.",
			journal: "Pædagogisk Psykologisk Tidskrift nr. 1. ",
			year: "2015",
			isActive: true,
			link: "http://www.maini.me/olearticles/EnBoerneUngeraadgivningogPPRjustintime.pdf"
		},
		{
			id: 3,
			title: "Liv i organisationer, affekt og intuition. Om Spinozas filosofi.",
			journal: "Nordiske Udkast, nr. 1,",
			year: "2013",
			isActive: false,
			link: "http://www.maini.me/olearticles/"
		},
		{
			id: 4,
			title: "PPR, tværfagligt arbejde og jazz – en spejling af praksis.",
			journal: "Pædagogisk psykologisk tidsskrift, Årg. 47, nr. 6",
			year: "(2010)",
			isActive: true,
			link: "http://www.maini.me/olearticles/PPRtvaerfagligtarbejdeogjazzenspejlingafpraksis.pdf"
		},
		{
			id: 5,
			title: "\"Just in time\": hvordan overgå diagnoserne og skabe viden på stedet.",
			journal: "Pædagogisk psykologisk tidsskrift, Årg. 46, nr. 3",
			year: "(2009)",
			isActive: true,
			link: "http://www.maini.me/olearticles/Justintimehvordanovergådiagnoserneogskabevidenpåstedet.pdf"
		},
		{
			id: 6,
			title: "Læring og vanskeligheder i én skole - flere verdener.",
			journal: "Relationer i skolen perspektiver på liv og læring. Redigeret af Tom Ritchie, Billesø & Baltzer",
			year: "2006",
			isActive: false,
			link: "http://www.maini.me/olearticles/"
		},
		{
			id: 7,
			title: "Væren i forhold: Relationer i kritisk psykologisk perspektiv",
			journal: "Relationer i Psykologien. Redigeret af Tom Ritchie, Billesøe & Baltzer",
			year: "2007",
			isActive: false,
			link: "http://www.maini.me/olearticles/"
		},
		{
			id: 8,
			title: "Ledelse af PPR i bevægelse: ledelse af viden i praksis",
			journal: "Psykologisk pædagogisk rådgivning, Årg. 44, nr. 5/6",
			year: "(2007)",
			isActive: true,
			link: "http://www.maini.me/olearticles/LedelseafPPRibevægelseledelseafvidenipraksis.pdf"
		},
		{
			id: 9,
			title: "Bevægelse, tænkning og organisation i professionelt arbejde",
			journal: "Psyke & logos, Årg. 27, nr. 2",
			year: "(2006)",
			isActive: true,
			link: "http://www.maini.me/olearticles/Bevaegelsetaenkningogorganisationiprofessioneltarbejde.pdf"
		},
		{
			id: 10,
			title: "Projekt, kategori og intuition - om psykologisk viden i praksis",
			journal: "Psykologisk pædagogisk rådgivning, Årg. 42, nr. 5/6",
			year: "(2005)",
			isActive: true,
			link: "http://www.maini.me/olearticles/Projektkategoriogintuitionompsykologiskvidenipraksis.pdf"
		},
		{
			id: 11,
			title: "Psykologiske kategorier i inklusiv praksis",
			journal: "Psykologisk pædagogisk rådgivning, Årg. 41, nr. 5/6",
			year: "(2004)",
			isActive: false,
			link: "http://www.maini.me/olearticles/"
		},
		{
			id: 12,
			title: "Viden i praksis: om forskning som praksisudviklingsforskning",
			journal: "Nordiske udkast, Årg. 31, nr. 1",
			year: "(2003)",
			isActive: false,
			link: "http://www.maini.me/olearticles/"
		}
	];

	init();

	function init() {

	}

	function goTo(index) {
		var go = vm.publicationsList[index].isActive;
		if(go) {
			var url = vm.publicationsList[index].link;

			window.open(url,'_blank');
		} else {
			alert("Denne artikel er ikke tilgængelig endnu.");
		}
	}

});

app.directive('resize', function($window, $rootScope) {
    return {
        link: function(scope) {
            angular.element($window).on('resize', function(e) {
                console.log("resize");
                // Namespacing events with name of directive + event to avoid collisions
                $rootScope.$broadcast('resize::resize');
            });
        }
    }
});