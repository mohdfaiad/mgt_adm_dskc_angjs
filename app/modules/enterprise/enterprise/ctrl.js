(function () {
    angular
        .module('managementAdminCloud')
        .controller('enterpriseCtrl', [
            '$http',
            'messagesFtry',
            'tabFtry',
            'apiFtry',
            enterpriseController
        ]);

    function enterpriseController($http, messagesFcty, tabFtry, apiFtry) {
        const self = this;
        const srvAPI = apiFtry.srvAPI();
        const url = srvAPI + 'api/enterprise';

        self.refresh = function () {
            $http({
                method: 'GET',
                url: url
            })
                .then(function (response) {
                    self.enterprise = {};
                    self.enterprises = response.data;
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
                data: self.enterprise
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
                url: `${url}/${self.enterprise._id}`,
                data: self.enterprise
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
                url: `${url}/${self.enterprise._id}`
            })
                .then(function () {
                    self.refresh();
                    messagesFcty.addSuccess('Operacao realizada com sucesso!')
                })
                .catch(function (response) {
                    messagesFcty.addError(response.err)
                })
        };

        self.showTabUpdate = function (enterprise) {
            self.enterprise = enterprise;
            tabFtry.show(self, {
                tabUpdate: true
            })
        };

        self.showTabDelete = function (enterprise) {
            self.enterprise = enterprise;
            tabFtry.show(self, {
                tabDelete: true
            })
        };

        self.refresh();
    }
})();