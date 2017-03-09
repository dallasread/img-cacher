module.exports = function base64Img(img, done) {
    var canvas = document.createElement('canvas');

    canvas.height = img.height;
    canvas.width = img.width;

    canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);

    done( undefined, canvas.toDataURL() );
};
