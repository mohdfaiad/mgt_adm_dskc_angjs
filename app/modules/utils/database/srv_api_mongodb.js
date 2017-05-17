const file = require('fs');

module.export = function () {

    return file.readFile('./database/srv_api_mongodb', (err, data) => {

        if (err) throw err;

        return data
    });
};