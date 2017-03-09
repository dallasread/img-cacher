var localStorage = window.localStorage;

module.exports = function saveSrc(src, data, done) {
    var _ = this;
    localStorage.setItem(_.prefix + src, data);
};
