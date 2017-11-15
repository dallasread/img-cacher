module.exports = function getSrc(cacheKey, options, done) {
    var _ = this;

    _.srcFromLocalStorage(_.buildSrc(cacheKey, options), function(err, data) {
        if (err) {
            return _.getData(cacheKey, options, function(err, data) {
                if (err) {
                    _.log('getSrc', 'error', err, cacheKey, options);
                    return done(err);
                }

                _.log('getSrc', 'success', 'noLocalStorage', cacheKey, options);
                done(undefined, data);
            });
        }

        _.log('getSrc', 'success', 'fromLocalStorage', cacheKey, options);
        done(undefined, data);
    });
};
