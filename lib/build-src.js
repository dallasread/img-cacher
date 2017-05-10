module.exports = function buildSrc(src, options) {
    var _ = this;
    options = typeof options === 'object' ? options : {};
    return _.prefix + src + '-' + JSON.stringify(options);
};
