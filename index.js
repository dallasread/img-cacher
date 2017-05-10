var Generator = require('generate-js');

var ImgCacher = Generator.generate(function ImgCacher(options) {
    var _ = this;

    _.defineProperties({
        prefix: options.prefix || 'img-'
    });
});

ImgCacher.definePrototype({
    base64Img: require('./lib/base64-img'),
    getData: require('./lib/get-data'),
    isValid: require('./lib/is-valid'),
    onload: require('./lib/onload'),
    reset: require('./lib/reset'),
    save: require('./lib/save'),
    src: require('./lib/src'),
    srcFromCache: require('./lib/src-from-cache'),
    buildSrc: require('./lib/build-src'),
});

if (typeof window !== 'undefined') {
    window.ImgCacher = ImgCacher;
}

module.exports = ImgCacher;
