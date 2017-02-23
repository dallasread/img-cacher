var localStorage = window.localStorage;

module.exports = function getSrc(src, done) {
    var _ = this;

    if (src.slice(0, 5) === 'data:') {
        done(undefined, src);
    } else {
        var exists = localStorage.getItem(_.prefix + src);

        if (exists) {
            done(undefined, exists, true);
        } else {
            _.getData(src, function(err, data) {
                if (data) {
                    localStorage.setItem(_.prefix + src, data);
                    done(undefined, data);
                } else {
                    done(err);
                }
            });
        }
    }
};
