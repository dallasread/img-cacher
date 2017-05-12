module.exports = function resolveSrc(src, err, data) {
    var _ = this,
        callbacks = _.memoized[src];

    if (callbacks instanceof Array) {
        for (var i = 0; i < callbacks.length; i++) {
            callbacks[i].call(_, err, data, i === 0);
        }
    }

    delete _.memoized[src];
};
