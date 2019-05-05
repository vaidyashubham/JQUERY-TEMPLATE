module.exports = function(_settings) {
    const module = {
        vars: {
            settings: _settings
        }
    };

    module.test = function () {
        return module.vars.settings;
    };

    return module;
};