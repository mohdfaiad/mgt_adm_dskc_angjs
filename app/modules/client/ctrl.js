angular
    .module('managementAdminCloud')
    .controller('clientCtrl', [

        '$http',
        clientController
    ]);

function clientController($http) {

    const vm = this;

    vm.create = function () {

        const url = 'http://localhost:9080/api/client';

        $http.post(url, vm.client)

            .then(function (response) {

                vm.client = {};
                console.log(response);
                console.log('Success');
            })

            .catch(function (response) {

                console.log(response);
                console.log('Error');
            })
    }
}