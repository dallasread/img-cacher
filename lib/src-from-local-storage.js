module.exports = function cacheFromSrc(cacheKey, done) {
    var _ = this;

    if (cacheKey.slice(0, 5) === 'data:') {
        done(undefined, cacheKey);
    } else {
        var exists = window.localStorage.getItem( cacheKey );
        if (exists) _.log('cacheFromSrc', 'fromLocalStorage', cacheKey);
        done(exists ? undefined : new Error('Image does not exist.'), exists);
    }
};
