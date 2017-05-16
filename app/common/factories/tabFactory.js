(function () {
   angular
       .module('managementAdminCloud')
       .factory('tabFtry', [

           tabFactory
       ]);
    
   function tabFactory() {

       function show(owner, {

           tabCreate = false,
           tabRead = false,
           tabUpdate = false,
           tabDelete = false
       }) {

           owner.tabCreate = tabCreate;
           owner.tabRead = tabRead;
           owner.tabUpdate = tabUpdate;
           owner.tabDelete = tabDelete;
       }

       return {show}
   }
})();