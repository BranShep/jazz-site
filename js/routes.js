angular.module('jazz')
    .config(function($stateProvider, $urlRouterProvider) {

        //This is a catch all for our routes
        $urlRouterProvider.otherwise("/");

          $stateProvider
            .state('home', {
              url: '/',
              templateUrl: '/views/home.html',
              controller: 'homeCtrl'
            })
});
