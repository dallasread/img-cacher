var cache = {};

function resolveImg(src, err, data) {
    var img = cache[src],
        i = img.callbacks.length;

    while (i--) {
        img.callbacks[i].call(img.callbacks[i], err, data);
        delete img.callbacks[i];
    }
}

module.exports = function getImg(src, done) {
    var _ = this,
        img = cache[src];

    if (img && !img.error) {
        if (img.isLoaded) {
            _.log('getImg', 'fromMemory', src);
            return done(undefined, img);
        }

        _.log('getImg', 'fromMemoryLoading', src);
        return img.callbacks.push(done);
    }

    img = cache[src] = window.document.createElement('img');

    img.callbacks = [done];

    img.onload = function() {
        img.isLoaded = true;
        resolveImg(src, undefined, img);
    };

    img.onerror = function onError(err) {
        img.error = err;
        resolveImg(src, err);
    };

    img.crossOrigin = 'anonymous';
    img.src = src;

    _.log('getImg', 'noMemory', src);
}
