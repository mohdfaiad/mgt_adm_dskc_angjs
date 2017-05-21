(function () {
    angular
        .module('managementAdminCloud')
        .factory('apiFtry', [function () {
            let address = '';
            return {
                srvAPI: function () {
                    address = 'http://192.168.0.11:3080/';
                    return address;
                }
            }
        }]);
})();