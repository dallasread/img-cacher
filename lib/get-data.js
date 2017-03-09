var document = window.document;

module.exports = function getData(src, done) {
    if (!this.isValid(src)) return done(new Error('Invalid src.'));

    var _ = this,
        img = document.createElement('img');

    img.onload = function() {
        _.base64Img(img, done);
    };

    img.onerror = function onError(err) {
        done(err);
    };

    img.crossOrigin = 'anonymous';
    img.src = src;
};
