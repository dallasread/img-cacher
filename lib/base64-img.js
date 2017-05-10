module.exports = function base64Img(img, options, done) {
    if (typeof options === 'function') {
        done = options;
        options = {};
    }

    var canvas = document.createElement('canvas'),
        ratio = 1;

    if (options.maxWidth || options.maxHeight) {
        if (options.maxWidth && options.maxHeight) {
            ratio = Math.min(options.maxWidth / img.width, options.maxHeight / img.height);
        } else if (options.maxWidth) {
            ratio = options.maxWidth / img.width;
        } else if (options.maxHeight) {
            ratio = options.maxHeight / img.height;
        }

        canvas.height = img.height * ratio;
        canvas.width = img.width * ratio;
    } else if (options.width || options.height) {
        if (options.width && options.height) {
            canvas.width = options.width;
            canvas.height = options.height;
        } else if (options.width) {
            ratio = options.width / img.width;
            canvas.width = options.width;
            canvas.height = img.height * ratio;
        } else if (options.height) {
            ratio = options.height / img.height;
            canvas.width = img.width * ratio;
            canvas.height = options.height;
        }
    }

    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

    done( undefined, canvas.toDataURL() );
};
