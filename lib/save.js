module.exports = function saveSrc(src, options, data) {
    var _ = this;

    if (!data) {
        data = options;
        options = {};
    }

    window.localStorage.setItem(
        _.buildSrc(src, options),
        data
    );

    _.log('save', src);
};
