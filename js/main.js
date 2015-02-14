(function () {

  requirejs(['utils/MyQuery', 'models/videos', 'views/indexView'], function (MyQ, Videos, IndexView) {
    var videos = new Videos({}),
        indexView, container;
    videos.fetch({}, function (err, response) {
      if (err)
        console.error();
      else {
        container = MyQ.query(".container");
        indexView = new IndexView({
          videos: videos,
          dom: container[0]
        });
        indexView.render();
        indexView.setHandlers();
      }
    });
  });

})();