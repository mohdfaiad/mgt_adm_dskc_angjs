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
                    templateUrl: 'modules/enterprise/enterprise/form.html'
                })
                .state('contract', {
                    url: '/contract',
                    templateUrl: 'modules/contract/contract/form.html'
                })
                .state('client', {
                    url: '/client',
                    templateUrl: 'modules/client/client/form.html'
                })
                .state('server', {
                    url: '/server',
                    templateUrl: 'modules/server/server/form.html'
                })
                .state('dskcloud', {
                    url: '/dskcloud',
                    templateUrl: 'modules/dskcloud/dskcloud/form.html'
                })
                .state('exam', {
                    url: '/exam',
                    templateUrl: 'modules/exam/exam/form.html'
                });

            $urlRouterProvider.otherwise('dashboard')
        }
    ]);