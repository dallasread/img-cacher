var localStorage = window.localStorage;

module.exports = function cacheFromSrc(src, done) {
    var _ = this;

    if (src.slice(0, 5) === 'data:') {
        done(undefined, src);
    } else {
        var exists = localStorage.getItem(_.prefix + src);
        done(exists ? undefined : new Error('Image does not exist.'), exists);
    }
};
