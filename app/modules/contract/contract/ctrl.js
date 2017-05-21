(function () {
    angular
        .module('managementAdminCloud')
        .controller('contractCtrl', [
            '$http',
            'messagesFtry',
            'tabFtry',
            'apiFtry',
            contractController
        ]);

    function contractController($http, messagesFcty, tabFtry, apiFtry) {
        const self = this;
        const srvAPI = apiFtry.srvAPI();
        const url = srvAPI + 'api/contract';

        self.refresh = function () {
            $http({
                method: 'GET',
                url: url
            })
                .then(function (response) {
                    self.contract = {ctr_usr: [{}]};
                    self.contracts = response.data;
                    tabFtry.show(self, {
                        tabRead: true,
                        tabCreate: true
                    })
                })
                .catch(function (response) {

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

        self.update = function () {
            $http({
                method: 'PUT',
                url: `${url}/${self.contract._id}`,
                data: self.contract
            })
                .then(function () {
                    self.refresh();
                    messagesFcty.addSuccess('Operacao realizada com sucesso!')
                })
                .catch(function (response) {
                    messagesFcty.addError(response.err)
                })
        };

        self.delete = function () {
            $http({
                method: 'DELETE',
                url: `${url}/${self.contract._id}`
            })
                .then(function () {
                    self.refresh();
                    messagesFcty.addSuccess('Operacao realizada com sucesso!')
                })
                .catch(function (response) {
                    messagesFcty.addError(response.err)
                })
        };

        self.showTabUpdate = function (contract) {
            self.contract = contract;
            tabFtry.show(self, {
                tabUpdate: true
            })
        };

        self.showTabDelete = function (contract) {
            self.contract = contract;
            tabFtry.show(self, {
                tabDelete: true
            })
        };

        self.addUser = function (index) {
            self.contract.ctr_usr.splice(index + 1, 0, {})
        };

        self.delUser = function (index) {
            if (self.contract.ctr_usr.length > 1) {
                self.contract.ctr_usr.splice(index, 1)
            }
        };

        self.refresh();
    }
})();