(function () {
  define(['utils/MyQuery', 'views/view', 'views/videoView'], function (MyQ, View, VideoView) {
    function IndexView (options) {
      View.call(this, options);
      this.videos = options.videos;
    }

    IndexView.prototype = new View();
    IndexView.prototype.constructor = IndexView;

    IndexView.prototype.template = function () {
      var html = [
      "<div class='form-inline control_bar'>",
      "<div class='form-group'>",
      "<label>Search Bar</label>",
      "<input class='form-control' placeholder='search term'>",
      "</div>",
      "</div>",
      "<div class='videos_container'>",
      "</div>"
      ];
      return html.join("");
    };

    IndexView.prototype.render = function () {
      var videos_container;
      this.dom.innerHTML = this.template();
      videos_container = MyQ.query(".videos_container", this.dom)[0];
      this.videos.models.forEach(function (video) {
        var videoView = new VideoView({
          model: video
        });
        videoView.render();
        videoView.setHandlers();
        videos_container.appendChild(videoView.dom);
      });
    };

    IndexView.prototype.setHandlers = function () {

    };

    return IndexView;
  });
})();