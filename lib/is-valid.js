module.exports = function isValid(src) {
    var xhr = window.ActiveXObject ? new window.ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest('Microsoft.XMLHTTP');

    xhr.open( 'HEAD', src, false );

    try {
        xhr.send();
        return xhr.status >= 200 && (xhr.status < 300 || xhr.status === 304);
    } catch (e) {
        return false;
    }
};
