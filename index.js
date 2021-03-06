var Generator = require('generate-js');

var ImgCacher = Generator.generate(function ImgCacher(options) {
    var _ = this;

    _.defineProperties({
        writable: true
    }, {
        logging: typeof options.logging === 'undefined' || typeof options.logging === 'string' ? options.logging : 'ImgCacher',
        prefix: options.prefix || 'img-'
    });
});

ImgCacher.definePrototype({
    base64Img: require('./lib/base64-img'),
    getImg: require('./lib/get-img'),
    getData: require('./lib/get-data'),
    isValid: require('./lib/is-valid'),
    reset: require('./lib/reset'),
    save: require('./lib/save'),
    src: require('./lib/src'),
    srcFromLocalStorage: require('./lib/src-from-local-storage'),
    buildSrc: require('./lib/build-src'),
    log: require('./lib/log')
});

if (typeof window !== 'undefined') {
    window.ImgCacher = ImgCacher;
}

module.exports = ImgCacher;
