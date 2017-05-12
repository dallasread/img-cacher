module.exports = function getData(src, options, done) {
    var _ = this;

    if (typeof options === 'function') {
        done = options;
        options = {};
    }

    if (_.memoized[src] instanceof Array) {
        _.memoized[src].push(done);
        return;
    }

    _.memoized[src] = [done];

    var img = window.document.createElement('img');

    img.onload = function() {
        _.base64Img(img, options, function(err, data) {
            _.resolveSrc(src, err, data);
        });
    };

    img.onerror = function onError(err) {
        _.resolveSrc(src, err);
    };

    img.crossOrigin = 'anonymous';
    img.src = src;

    _.log('getData', src);
};
