module.exports = function reset() {
    var _ = this,
        localStorage = window.localStorage,
        key;

    for (var i = 0; i < localStorage.length; i++)   {
        key = localStorage.key(i);

        if (key.indexOf(_.prefix) === 0) {
            localStorage.removeItem(localStorage.key(i));
        }
    }
};
