(function () {

  requirejs(['models/videos'], function (Videos) {
    var videos = new Videos({
      url: "http://api.5min.com/search/obama/videos.json"
    });
    videos.fetch({}, function (err, response) {
      if (err)
        console.error();
      else
        console.log(response);
    });
  });

})();