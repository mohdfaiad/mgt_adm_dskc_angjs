(function () {
    angular
        .module('managementAdminCloud')
        .controller('serverCtrl', [
            '$http',
            'messagesFtry',
            'tabFtry',
            'apiFtry',
            serverController
        ]);

    function serverController($http, messagesFcty, tabFtry, apiFtry) {
        const self = this;
        const srvAPI = apiFtry.srvAPI();
        const url = srvAPI + 'api/server';

        self.refresh = function () {
            $http({
                method: 'GET',
                url: url
            })
                .then(function (response) {
                    self.server = {};
                    self.servers = response.data;
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
                data: self.server
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
                url: `${url}/${self.server._id}`,
                data: self.server
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
                url: `${url}/${self.server._id}`
            })
                .then(function () {
                    self.refresh();
                    messagesFcty.addSuccess('Operacao realizada com sucesso!')
                })
                .catch(function (response) {
                    messagesFcty.addError(response.err)
                })
        };

        self.showTabUpdate = function (server) {
            self.server = server;
            tabFtry.show(self, {
                tabUpdate: true
            })
        };

        self.showTabDelete = function (server) {
            self.server = server;
            tabFtry.show(self, {
                tabDelete: true
            })
        };

        self.refresh();
    }
})();