module.exports = function getSrc(src, options, done) {
    var _ = this;

    _.srcFromCache(src, options, function(err, data) {
        if (err) {
            return _.getData(src, options, function(err, data) {
                if (data) {
                    _.log('getSrc', 'success', 'noLocalStorage', src, options);
                    done(undefined, data);
                } else {
                    _.log('getSrc', 'error', src, options);
                    done(err);
                }
            });
        }

        _.log('getSrc', 'success', 'fromLocalStorage', src, options);
        done(undefined, data, true);
    });
};
