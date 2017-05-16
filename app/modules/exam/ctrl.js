(function () {
    angular
        .module('managementAdminCloud')
        .controller('examCtrl', [

            '$http',
            'messagesFtry',
            'tabFtry',
            examController
        ]);

    function examController($http, messagesFcty, tabFtry) {

        const self  = this;
        const url   = 'http://localhost:9080/api/exam';

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