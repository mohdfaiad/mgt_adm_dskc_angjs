(function () {
    angular
        .module('managementAdminCloud')
        .factory('apiFtry', [function () {
            let address = '';
            return {
                srvAPI: function () {
                    address = 'http://localhost:3080/';
                    return address;
                }
            }
        }]);
})();
