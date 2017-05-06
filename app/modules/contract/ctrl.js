(function () {
    angular
        .module('managementAdminCloud')
        .controller('contractCtrl', [

            '$http',
            'messagesFcty',
            contractController
        ]);

    function contractController($http, messagesFcty) {

        const self = this;
        const url = 'http://localhost:9080/api/contract';

        self.refresh = function () {

            $http({

                method: 'GET',
                url: url
            })

                .then(function (response) {

                    self.contract = {};
                    self.contracts = response

                    console.log(response)
                })

                .catch(function (response) {

                    console.log(response)
                })

        };

        self.post = function () {

            $http({

                method: 'POST',
                url: url,
                data: self.contract
            })

                .then(function () {

                    self.refresh();
                    messagesFcty.addSuccess('Operacao realizada com sucesso');
                })

                .catch(function (response) {

                    messagesFcty.addError(response.err)
                })
        };

        self.refresh();
    }
})();