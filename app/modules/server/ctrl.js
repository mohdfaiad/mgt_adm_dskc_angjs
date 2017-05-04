angular
    .module('managementAdminCloud')
    .controller('serverCtrl', [

        '$http',
        serverController
    ]);

function serverController($http) {

    const vm = this;

    vm.create = function () {

        const url = 'http://localhost:9080/api/server';

        $http.post(url, vm.server)

            .then(function (response) {

                vm.server = {};
                console.log(response);
                console.log('Success');
            })

            .catch(function (response) {

                console.log(response);
                console.log('Error');
            })
    }
}