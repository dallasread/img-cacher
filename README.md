# ImgCacher

Serve images from localStorage – great for offline apps.

```
<script type="text/javascript" src="/path/to/img-cacher.js"></script>
<script type="text/javascript">
    var url = 'http://www.marketingjs.com/assets/car.jpg',
        imgCacher = new ImgCacher({
            prefix: 'img-demo-'
        });

    imgCacher.src(url, function(err, dataUrl) {
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
    var img = document.createElement('div');
    imgCacher.base64Img(img, function(err, data) {
        if (err) return; // An error occurred
        // console.log(data); // Base64-encoded image
    });

    // Grab the data URL of a src
    imgCacher.getData(url, function(err, data) {
        if (err) return; // An HTTP error occurred
        // console.log(data); // Base64-encoded image
    });

    // Check if the URL exists
    imgCacher.isValid(url);

    // Clears all images from the cache
    imgCacher.reset();

    // Synchronously save an img to the cache
    imgCacher.save(url, data);

    // See if image is in the cache
    imgCacher.srcFromCache(url, function(err, data) {
        if (err) return; // Image not found in cache
        // console.log(data); // Base64-encoded image
    });
</script>
```
