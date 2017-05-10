# ImgCacher

Serve images from localStorage – great for offline apps.

```
<script type="text/javascript" src="/path/to/img-cacher.js"></script>
<script type="text/javascript">
    var url = 'http://www.marketingjs.com/assets/car.jpg',
        imgCacher = new ImgCacher({
            prefix: 'img-demo-'
        });

    imgCacher.src(url, { 
        maxWidth: 600,
        maxHeight: 600,
        // width: 600,
        // height: 600,
    }, function(err, dataUrl) {
        var img = document.createElement('img');

        if (err) { // Something went wrong! Fallback to the supplied `url`.
            img.src = url;
        } else {
            img.src = dataUrl;
        }

        document.body.appendChild(img);
    });

    // Other convenience methods in no particular order:

    // Grab the data URL of a src
    // options is an optional argument that can set width/height/maxWidth/maxHeight
    var img = document.createElement('div');
    imgCacher.base64Img(img, /* options, */ function(err, data) {
        if (err) return; // An error occurred
        // console.log(data); // Base64-encoded image
    });

    // Grab the data URL of a src
    // options is an optional argument that can set width/height/maxWidth/maxHeight
    imgCacher.getData(url, /* options, */ function(err, data) {
        if (err) return; // An HTTP error occurred
        // console.log(data); // Base64-encoded image
    });

    // Check if the URL exists
    imgCacher.isValid(url);

    // Clears all images from the cache
    imgCacher.reset();

    // Synchronously save an img to the cache
    // options is an optional argument that can set width/height/maxWidth/maxHeight
    imgCacher.save(url, /* options, */ data);

    // See if image is in the cache
    // options is an optional argument that can set width/height/maxWidth/maxHeight
    imgCacher.srcFromCache(url, /* options, */ function(err, data) {
        if (err) return; // Image not found in cache
        // console.log(data); // Base64-encoded image
    });
</script>
```

## CHANGELOG

1.0.2
- Add options hash to all methods for all methods that accept a `src`. Options hash can functionally accept `width`, `height`, `maxWidth`, and `maxHeight`.
