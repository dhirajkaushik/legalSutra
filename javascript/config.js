app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/pages/home.html',
      controller: 'HomeCtrl'
    })
    .state('about', {
      url: '/about',
      templateUrl: '/pages/about.html',
      controller: 'AboutCtrl'
    })
    .state('worldWide', {
      url: '/worldWide',
      templateUrl: '/pages/worldWide.html',
      controller: 'worldWideCtrl'
    })
    
    .state('blog', {
      url: '/blog',
      templateUrl: '/pages/blog.html',
      controller: 'blogCtrl'
    })
    .state('attorney', {
      url: '/attorney',
      templateUrl: '/pages/attorney.html',
      controller: 'attorneyCtrl'
    })
    .state('attorney.VinodKaushik', {
      url: '/attorney.VinodKaushik',
      templateUrl: '/pages/about-us/VinodKaushik.html',
      controller: 'AttorneyCtrl'
    })
     .state('bankRuptcy', {
      url: '/bankRuptcy',
      templateUrl: '/pages/bankRuptcy.html',
      controller: 'bankRuptcyCtrl'
    })
    .state('practiceArea', {
      url: '/practiceArea',
      templateUrl: '/pages/practiceArea.html',
      controller: 'PracticeAreaCtrl'
    })
    .state('criminalLaw', {
      url: '/criminalLaw',
      templateUrl: '/pages/criminalLaw.html',
      controller: 'criminalLawCtrl'
    })
       .state('corporateCommercial', {
      url: '/corporateCommercial',
      templateUrl: '/pages/corporateCommercial.html',
      controller: 'corporateCommercialCtrl'
    })

 .state('competitionAntitrust', {
      url: '/competitionAntitrust',
      templateUrl: '/pages/competitionAntitrust.html',
      controller: 'competitionAntitrustCtrl'
    })
      .state('cyberSecurity', {
      url: '/cyberSecurity',
      templateUrl: '/pages/cyberSecurity.html',
      controller: 'cyberSecurityCtrl'
    })
     .state('resolution', {
      url: '/resolution',
      templateUrl: '/pages/resolution.html',
      controller: 'resolutionCtrl'
    })
     .state('whiteCollar', {
      url: '/whiteCollar',
      templateUrl: '/pages/whiteCollar.html',
      controller: 'whiteCollarCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: '/pages/contact.html',
      controller: 'ContactCtrl'
    })
    .state('services', {
      url: '/services',
      templateUrl: '/pages/services.html',
      controller: 'servicesCtrl'
    })
    
    .state('barMembership', {
      url: '/barMembership',
      templateUrl: '/pages/barMembership.html',
      controller: 'BarMembershipCtrl'
    });
  $urlRouterProvider.otherwise('home');
}]);
