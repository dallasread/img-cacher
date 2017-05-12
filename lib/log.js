module.exports = function log() {
    var _ = this;

    if (_.logging) {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(_.logging + ' ~>');
        console.debug.apply(console.debug, args);
    }
};
