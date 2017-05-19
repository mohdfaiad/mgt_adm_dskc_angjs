(function () {
    angular
        .module('managementAdminCloud')
        .controller('clientCtrl', [
            '$http',
            'messagesFtry',
            'tabFtry',
            clientController
        ]);

    function clientController($http, messagesFcty, tabFtry) {
        const self = this;
        const url = 'http://localhost:9080/api/client';

        self.refresh = function () {
            $http({
                method: 'GET',
                url: url
            })
                .then(function (response) {
                    self.client = {cli_usr: [{}]};
                    self.clients = response.data;
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
                data: self.client
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
                url: `${url}/${self.client._id}`,
                data: self.client
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
                url: `${url}/${self.client._id}`
            })
                .then(function () {
                    self.refresh();
                    messagesFcty.addSuccess('Operacao realizada com sucesso!')
                })
                .catch(function (response) {
                    messagesFcty.addError(response.err)
                })
        };

        self.showTabUpdate = function (client) {
            self.client = client;
            tabFtry.show(self, {
                tabUpdate: true
            })
        };

        self.showTabDelete = function (client) {
            self.client = client;
            tabFtry.show(self, {
                tabDelete: true
            })
        };

        self.addUser = function (index) {
            self.client.cli_usr.splice(index + 1, 0, {})
        };

        self.delUser = function (index) {
            if (self.client.cli_usr.length > 1) {
                self.client.cli_usr.splice(index, 1)
            }
        };

        self.refresh();
    }
})();