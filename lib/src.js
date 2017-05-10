module.exports = function getSrc(src, options, done) {
    var _ = this;

    _.srcFromCache(src, options, function(err, data) {
        if (err) {
            return _.getData(src, options, function(err, data) {
                if (data) {
                    _.save(src, options, data);
                    done(undefined, data);
                } else {
                    done(err);
                }
            });
        }

        done(undefined, data, true);
    });
};
