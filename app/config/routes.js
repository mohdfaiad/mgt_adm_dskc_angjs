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
                templateUrl: 'enterprise/enterprise.html'
            });

        $urlRouterProvider.otherwise('dashboard')
    }
]);