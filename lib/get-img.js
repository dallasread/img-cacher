var cache = {};

function resolveImg(cacheKey, err, data) {
    var img = cache[cacheKey],
        i = img.callbacks.length;

    while (i--) {
        img.callbacks[i].call(img.callbacks[i], err, data);
        delete img.callbacks[i];
    }
}

module.exports = function getImg(cacheKey, options, done) {
    var _ = this,
        img = cache[cacheKey];

    if (img && !img.error) {
        if (img.isLoaded) {
            _.log('getImg', 'fromMemory', cacheKey);
            return done(undefined, img);
        }

        _.log('getImg', 'fromMemoryLoading', cacheKey);
        return img.callbacks.push(done);
    }

    img = cache[cacheKey] = window.document.createElement('img');

    img.crossOrigin = 'anonymous';
    img.callbacks = [done];

    img.onload = function() {
        img.isLoaded = true;
        resolveImg(cacheKey, undefined, img);
    };

    img.onerror = function onError(err) {
        img.error = err;
        resolveImg(cacheKey, err);
    };

    if (typeof options.src === 'function') {
        options.src.call(_, function(src) {
            img.src = src;
        });
    } else {
        img.src = options.src || cacheKey;
    }

    _.log('getImg', 'noMemory', cacheKey);
}
