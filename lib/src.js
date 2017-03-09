module.exports = function getSrc(src, done) {
    var _ = this;

    _.srcFromCache(src, function(err, data) {
        if (err) {
            return _.getData(src, function(err, data) {
                if (data) {
                    _.save(src, data);
                    done(undefined, data);
                } else {
                    done(err);
                }
            });
        }

        done(undefined, src, true);
    });
};
