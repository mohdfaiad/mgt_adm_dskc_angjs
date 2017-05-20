angular
    .module('managementAdminCloud')
    .factory('messagesFtry', [

        'toastr',
        messagesFactory
    ]);

function messagesFactory(toastr) {
    
    function addMessage(message, title, method) {

        if (message instanceof Array) {

            message.forEach(msg => toastr[method](message, title))
        } else {
            toastr[method](message, title)
        }
    }
    
    function addSuccess(message) {

        addMessage(message, 'Sucesso', 'success')
    }
    
    function addError(message) {

        addMessage(message, 'Erro', 'error')
    }

    return {addSuccess, addError}
}