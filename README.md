# ImgCacher

Serve images from localStorage – great for offline apps.

```
<script type="text/javascript" src="/path/to/img-cacher.js"></script>
<script type="text/javascript">
    var url = 'http://www.marketingjs.com/assets/car.jpg',
        imgCacher = new ImgCacher({
            prefix: 'img-demo-'
        });

    // Basic usage
    imgCacher.src(url, { 
        maxWidth: 600,
        maxHeight: 600
    }, function(err, dataUrl) {
        var img = document.createElement('img');

        if (err) { // Something went wrong! Fallback to the supplied `url`.
            img.src = url;
        } else {
            img.src = dataUrl;
        }

        document.body.appendChild(img);
    });

    // A Square, Cropped Thumbnail
    imgCacher.src(url, { 
        fillWidth: 300,
        fillHeight: 300,
        bg: '#ffffff',
        cropWidth: 300,
        cropHeight: 300
        // cropX: 0, // If not supplied, crop is centered horizontally
        // cropY: 0 // If not supplied, crop is centered vertically
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

1.0.3
-----

- Added `fillWidth` and `fillHeight`. These maximize the image to the biggest possible area.
- Added `cropWidth`, `cropHeight`, `cropX`, and `cropY`. These crop your image to the desired size AFTER resizing it and BEFORE storing it locally.
- Added `bg` which adds a background color to the image (only seen if cropping out of bounds or if your image has a transparent background.

1.0.2
-----

- Add options hash to all methods for all methods that accept a `src`. Options hash can functionally accept `width`, `height`, `maxWidth`, and `maxHeight`.

