angular
    .module('managementAdminCloud')
    .controller('contractCtrl', [

        '$http',
        'messagesFcty',
        contractController
    ]);

function contractController($http, messagesFcty) {

    const self = this;

    self.post = function () {

        $http({

            method: 'POST',
            url: 'http://localhost:9080/api/contract',
            data: self.contract
        })

            .then(function (response) {

                self.contract = {};
                messagesFcty.addSuccess('Operacao realizada com sucesso');

                console.log(response);
            })

            .catch(function (response) {

                console.log(response);
                messagesFcty.addError(response.err)
            })
    }
}

// angular
//     .module('managementAdminCloud')
//     .controller('contractCtrl', [
//
//         '$http',
//         contractController
//     ]);
//
// function contractController($http) {
//
//     const vm = this;
//
//     vm.create = function () {
//
//         const url = 'http://localhost:9080/api/contract';
//
//         $http.post(url, vm.contract)
//
//             .then(function (response) {
//
//                 vm.contract = {};
//                 console.log(response);
//                 console.log('Success' + response);
//             })
//
//             .catch(function (response) {
//
//                 console.log(response);
//                 console.log('Error' + response);
//             })
//     }
// }