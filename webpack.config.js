var min = process.argv.indexOf('-p') !== -1 ? '.min' : '',
    js = {
        entry: ['./index.js'],
        output: { filename: './demo/img-cacher' + min + '.js' }
    };

module.exports = [js];
