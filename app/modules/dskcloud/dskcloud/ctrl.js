(function () {
    angular
        .module('managementAdminCloud')
        .controller('dskcloudCtrl', [
            '$http',
            'messagesFtry',
            'tabFtry',
            'apiFtry',
            dskcloudController
        ]);

    function dskcloudController($http, messagesFcty, tabFtry, apiFtry) {
        const self = this;
        const srvAPI = apiFtry.srvAPI();
        const url = srvAPI + 'api/dskcloud';

        self.refresh = function () {
            $http({
                method: 'GET',
                url: url
            })
                .then(function (response) {
                    self.dskcloud = {};
                    self.dskclouds = response.data;
                    tabFtry.show(self, {
                        tabRead: true,
                        tabCreate: true
                    });
                })
                .catch(function (response) {

                })
        };

        self.post = function () {
            $http({
                method: 'POST',
                url: url,
                data: self.dskcloud
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
                url: `${url}/${self.dskcloud._id}`,
                data: self.dskcloud
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
                url: `${url}/${self.dskcloud._id}`
            })
                .then(function () {
                    self.refresh();
                    messagesFcty.addSuccess('Operacao realizada com sucesso!')
                })
                .catch(function (response) {
                    messagesFcty.addError(response.err)
                })
        };

        self.showTabUpdate = function (dskcloud) {
            self.dskcloud = dskcloud;
            tabFtry.show(self, {
                tabUpdate: true
            })
        };

        self.showTabDelete = function (dskcloud) {
            self.dskcloud = dskcloud;
            tabFtry.show(self, {
                tabDelete: true
            })
        };

        self.refresh();
    }
})();