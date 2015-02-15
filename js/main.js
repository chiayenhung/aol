(function () {

  requirejs(['utils/MyQuery', 'models/videos', 'views/indexView'], function (MyQ, Videos, IndexView) {
    var videos = new Videos({}),
        indexView, container;
    container = MyQ.query(".container");
    indexView = new IndexView({
      dom: container[0]
    });
    indexView.render();
    indexView.setHandlers();
  });

})();