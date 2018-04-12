function getSize(img, options) {
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

function getCrop(img, options, size) {
    return {
        x: typeof options.cropX !== 'undefined' ? options.cropX : (options.cropWidth ? (size.width - options.cropWidth) / -2 : 0),
        y: typeof options.cropY !== 'undefined' ? options.cropY : (options.cropHeight ? (size.height - options.cropHeight) / -2 : 0),
        width: options.cropWidth || size.width,
        height: options.cropHeight || size.height
    };
}

// Derived from https://stackoverflow.com/questions/19262141/resize-image-with-javascript-canvas-smoothly
function steppedScale(img, width, step) {
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        oc = document.createElement('canvas'),
        octx = oc.getContext('2d');

    canvas.width = width;
    canvas.height = canvas.width * img.height / img.width;

    if (img.width * step > width) {
        var mul = 1 / step,
            cur = {
                width: Math.floor(img.width * step),
                height: Math.floor(img.height * step)
            };

        oc.width = cur.width;
        oc.height = cur.height;

        octx.drawImage(img, 0, 0, cur.width, cur.height);

        while (cur.width * step > width) {
            cur = {
                width: Math.floor(cur.width * step),
                height: Math.floor(cur.height * step)
            };

            octx.drawImage(oc, 0, 0, cur.width * mul, cur.height * mul, 0, 0, cur.width, cur.height);
        }

        ctx.drawImage(oc, 0, 0, cur.width, cur.height, 0, 0, canvas.width, canvas.height);
    } else {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    }

    return canvas;
}

var cached = {};

module.exports = function base64Img(img, options, done) {
    if (typeof options === 'function') {
        done = options;
        options = {};
    }

    var _ = this,
        srcWithOptions = _.buildSrc(img.src, options);

    if (cached[srcWithOptions]) {
        _.log('base64Img', 'fromMemory', img.src, options);
        return done( undefined, cached[srcWithOptions] );
    }

    var croppedCanvas = document.createElement('canvas'),
        croppedContext = croppedCanvas.getContext('2d'),
        size = getSize(img, options),
        crop = getCrop(img, options, size),
        bufferCanvas = steppedScale(img, size.width, typeof options.sharpness === 'number' && options.sharpness < 1 ? options.sharpness : 0.5);

    croppedCanvas.width = crop.width;
    croppedCanvas.height = crop.height;

    if (options.bg) {
        croppedContext.fillStyle = options.bg;
        croppedContext.fillRect(0, 0, crop.width, crop.height);
    }

    croppedContext.drawImage(bufferCanvas, crop.x * -1, crop.y * -1, crop.width, crop.height, 0, 0, crop.width, crop.height);
    croppedContext.imageSmoothingEnabled = true;

    cached[srcWithOptions] = croppedCanvas.toDataURL(options.type, options.encoderOptions);

    _.log('base64Img', 'noMemory', img.src, options);

    done( undefined, cached[srcWithOptions], true );
};
