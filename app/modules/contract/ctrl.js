angular
    .module('managementAdminCloud')
    .controller('contractCtrl', [

        '$http',
        contractController
    ]);

function contractController($http) {

    const vm = this;

    vm.create = function () {

        const url = 'http://localhost:9080/api/contract';

        $http.post(url, vm.contract)

            .then(function (response) {

                vm.contract = {};
                console.log(response);
                console.log('Success');
            })

            .catch(function (response) {

                console.log(response);
                console.log('Error');
            })
    }
}