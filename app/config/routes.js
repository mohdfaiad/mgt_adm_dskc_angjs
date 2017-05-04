angular.module('managementAdminCloud').config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/dashboard.html'
            })
            .state('enterprise', {
                url: '/enterprise',
                templateUrl: 'modules/enterprise/form.html'
            })
            .state('contract', {
                url: '/contract',
                templateUrl: 'modules/contract/form.html'
            })
            .state('client', {
                url: '/client',
                templateUrl: 'modules/client/form.html'
            })
            .state('server', {
                url: '/server',
                templateUrl: 'modules/server/form.html'
            });

        $urlRouterProvider.otherwise('dashboard')
    }
]);