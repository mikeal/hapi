// Declare internals

var internals = {
    modules: {
        error: require('./error'),
        log: require('hapi-log').log,
        server: require('./server'),
        response: require('./response'),
        utils: require('./utils'),
        types: require('joi').Types,
        pack: require('./pack')
    }
};


// Export public modules
module.exports = function (host, port, options) {
    return new module.exports.Server(host, port, options);
};

internals.export = function () {

    for (var key in internals.modules) {
        if (internals.modules.hasOwnProperty(key)) {
            module.exports[key] = module.exports[key.charAt(0).toUpperCase() + key.slice(1)] = internals.modules[key];
        }
    }
};

internals.export();

