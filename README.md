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

    // Other convenience methods:
    imgCacher.isValid(url); // Check if the URL exists

    imgCacher.getData(url, function(err, data) {
        if (err) return; // An HTTP error occurred
        // console.log(data); // Base64-encoded image
    });
</script>
```
