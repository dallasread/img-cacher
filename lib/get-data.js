module.exports = function getData(src, done) {
    if (!this.isValid(src)) return done(new Error('Invalid src.'));

    var img = window.document.createElement('img');

    img.onload = function() {
        var canvas = window.document.createElement('canvas');

        canvas.height = img.height;
        canvas.width = img.width;

        canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

        done( undefined, canvas.toDataURL() );
    };

    img.onerror = function onError(err) {
        done(err);
    };

    img.crossOrigin = 'anonymous';
    img.src = src;
};
