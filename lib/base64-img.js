function applySize(img, options) {
    var ratio = 1,
        size = {
            width: img.width,
            height: img.height
        };

    if (options.fillWidth || options.fillHeight) {
        var widthRatio = (typeof options.fillWidth !== 'undefined' ? options.fillWidth : 0) / size.width,
            heightRatio = (typeof options.fillHeight !== 'undefined' ? options.fillHeight : 0) / size.height;

        ratio = widthRatio > heightRatio ? widthRatio : heightRatio;
        size.height = img.height * ratio;
        size.width = img.width * ratio;
    } else if (options.maxWidth || options.maxHeight) {
        if (options.maxWidth && options.maxHeight) {
            ratio = Math.min(options.maxWidth / img.width, options.maxHeight / img.height);
        } else if (options.maxWidth) {
            ratio = options.maxWidth / img.width;
        } else if (options.maxHeight) {
            ratio = options.maxHeight / img.height;
        }

        size.height = img.height * ratio;
        size.width = img.width * ratio;
    } else if (options.width || options.height) {
        if (options.width && options.height) {
            size.width = options.width;
            size.height = options.height;
        } else if (options.width) {
            ratio = options.width / img.width;
            size.width = options.width;
            size.height = img.height * ratio;
        } else if (options.height) {
            ratio = options.height / img.height;
            size.width = img.width * ratio;
            size.height = options.height;
        }
    }

    return size;
}

function applyCrop(img, options, size) {
    return {
        x: typeof options.cropX !== 'undefined' ? options.cropX : (options.cropWidth ? (size.width - options.cropWidth) / 2 : 0),
        y: typeof options.cropY !== 'undefined' ? options.cropY : (options.cropHeight ? (size.height - options.cropHeight) / 2 : 0),
        width: options.cropWidth || size.width,
        height: options.cropHeight || size.height
    };
}

module.exports = function base64Img(img, options, done) {
    if (typeof options === 'function') {
        done = options;
        options = {};
    }

    var canvas = document.createElement('canvas'),
        buffer = document.createElement('canvas'),
        size = applySize(img, options),
        crop = applyCrop(img, options, size);

    buffer.width = size.width;
    buffer.height = size.height;

    buffer.getContext('2d').drawImage(img, 0, 0, buffer.width, buffer.height);

    canvas.width = crop.width;
    canvas.height = crop.height;

    if (options.bg) {
        canvas.getContext('2d').fillStyle = options.bg;
        canvas.getContext('2d').fillRect(0, 0, crop.width, crop.height);
    }

    canvas.getContext('2d').drawImage(buffer, crop.x * -1, crop.y * -1, buffer.width, buffer.height);

    done( undefined, canvas.toDataURL() );
};
