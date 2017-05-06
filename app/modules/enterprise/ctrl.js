angular
    .module('managementAdminCloud')
    .controller('enterpriseCtrl', [

        '$http',
        enterpriseController
    ]);

function enterpriseController($http) {

    const vm = this;

    vm.create = function () {

        const url = 'http://54.233.82.242:9080/api/enterprise';

        $http.post(url, vm.enterprise)

            .then(function (response) {

                vm.enterprise = {};
                console.log(response);
                console.log('Success');
            })

            .catch(function (response) {

                console.log(response);
                console.log('Error');
            })
    }
}