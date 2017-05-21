(function () {
    angular
        .module('managementAdminCloud')
        .controller('examCtrl', [
            '$http',
            'messagesFtry',
            'tabFtry',
            'apiFtry',
            examController
        ]);

    function examController($http, messagesFcty, tabFtry, apiFtry) {
        const self  = this;
        const srvAPI = apiFtry.srvAPI();
        const url = srvAPI + 'api/exam';

        self.refresh = function () {
            $http({

                method: 'GET',
                url:    url
            })
                .then(function (response) {
                    self.exam   = {};
                    self.exams  = response.data;
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
                url:    url,
                data:   self.exam
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