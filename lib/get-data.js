module.exports = function getData(src, options, done) {
    if (typeof options === 'function') {
        done = options;
        options = {};
    }

    if (!this.isValid(src)) return done(new Error('Invalid src.'));

    var _ = this,
        img = window.document.createElement('img');

    img.onload = function() {
        _.base64Img(img, options, done);
    };

    img.onerror = function onError(err) {
        done(err);
    };

    img.crossOrigin = 'anonymous';
    img.src = src;
};
