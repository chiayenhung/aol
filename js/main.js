(function () {

  requirejs(['models/videos'], function (Videos) {
    var videos = new Videos({});
    videos.fetch({}, function (err, response) {
      if (err)
        console.error();
      else
        console.log(response);
    });
  });

})();