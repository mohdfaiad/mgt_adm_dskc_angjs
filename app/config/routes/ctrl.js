angular
    .module('managementAdminCloud')
    .config([

    '$stateProvider',
    '$urlRouterProvider',

    function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/dskc/form.html'
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
                templateUrl: 'modules/client/client/form.html'
            })
            .state('server', {
                url: '/server',
                templateUrl: 'modules/server/form.html'
            })
            .state('exam', {
                url: '/exam',
                templateUrl: 'modules/exam/form.html'
            });

        $urlRouterProvider.otherwise('dashboard')
    }
]);