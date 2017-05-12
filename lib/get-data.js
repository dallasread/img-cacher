module.exports = function getData(cacheKey, options, done) {
    var _ = this;

    if (typeof options === 'function') {
        done = options;
        options = {};
    }

    _.getImg(cacheKey, options, function(err, img) {
        if (err) {
            return done(err);
        }

        _.base64Img(img, options, function(err, data, isCreated) {
            if (isCreated) {
                _.save(cacheKey, options, data);
            }

            done(err, data);
        });
    });
};
