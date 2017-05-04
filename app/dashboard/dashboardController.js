(function () {
    angular.module('managementAdminCloud').controller('dashboardCtrl', [

        '$scope',
        '$http',
        DashboardController
    ]);

    function DashboardController($scope, $http) {

        $scope.getContractCount = function () {

            const url = 'http://localhost:8080/contract/count';

            $http.get(url).success(function ({count = 0}) {
                $scope.get = count
            })
        };

        $scope.getContractCount()
    }
})();