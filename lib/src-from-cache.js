module.exports = function cacheFromSrc(src, options, done) {
    var _ = this;

    if (typeof options === 'function') {
        done = options;
        options = {};
    }

    if (src.slice(0, 5) === 'data:') {
        done(undefined, src);
    } else {
        var exists = window.localStorage.getItem( _.buildSrc(src, options) );
        done(exists ? undefined : new Error('Image does not exist.'), exists);
    }
};
