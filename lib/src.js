module.exports = function getSrc(src, options, done) {
    var _ = this;

    _.log('getSrc', src);

    _.srcFromCache(src, options, function(err, data) {
        if (err) {
            return _.getData(src, options, function(err, data, firstCallback) {
                if (data) {
                    if (firstCallback) {
                        _.save(src, options, data);
                    }

                    _.log('resolve', src);

                    done(undefined, data, !firstCallback);
                } else {
                    done(err);
                }
            });
        }

        done(undefined, data, true);
    });
};
