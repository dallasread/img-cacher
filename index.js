var Generator = require('generate-js');

var ImgCacher = Generator.generate(function ImgCacher(options) {
    var _ = this;

    _.defineProperties({
        prefix: options.prefix || 'img-'
    });
});

ImgCacher.definePrototype({
    src: require('./lib/src'),
    isValid: require('./lib/is-valid'),
    getData: require('./lib/get-data')
});

if (typeof window !== 'undefined') {
    window.ImgCacher = ImgCacher;
}

module.exports = ImgCacher;
