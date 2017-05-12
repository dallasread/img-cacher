module.exports = function getData(src, options, done) {
    var _ = this;

    if (typeof options === 'function') {
        done = options;
        options = {};
    }

    _.getImg(src, function(err, img, fromCache) {
        if (err) {
            return done(err);
        }

        _.base64Img(img, options, function(err, data) {
            done(err, data, fromCache);
        });
    });
};
