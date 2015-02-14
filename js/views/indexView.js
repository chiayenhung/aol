(function () {
  define(['utils/MyQuery', 'views/view', 'views/videoView', 'views/videoPlayView', 'models/videos'], function (MyQ, View, VideoView, VideoPlayView, Videos) {
    function IndexView (options) {
      View.call(this, options);
      this.videos = new Videos();
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
      "</div>",
      "<div class='wheel_container'>",
      "<img src='img/ajax-loader.gif'>",
      "</div>",
      "<div class='player_container video_wrap row-fluid'></div>"
      ];
      return html.join("");
    };

    IndexView.prototype.render = function () {
      var copy = this,
          videos_container, player_container;
      this.dom.innerHTML = this.template();

      player_container = MyQ.query(".player_container", this.dom)[0];
      this.videoPlayView = new VideoPlayView({
        dom: player_container
      });
      this.videoPlayView.setHandlers();
      this.renderVideos();
    };

    IndexView.prototype.renderVideos = function () {
      var copy = this,
          videos_container;
      videos_container = MyQ.query(".videos_container", this.dom)[0];
      this.videos.models.forEach(function (video) {
        var videoView = new VideoView({
          model: video
        });
        videoView.render();
        videoView.setHandlers();
        videos_container.appendChild(videoView.dom);
        videoView.off("play").on("play", function (model) {
          copy.videoPlayView.render(model);
        });
      });
    };

    IndexView.prototype.setHandlers = function () {
      var copy = this,
          videos_container = MyQ.query(".videos_container", this.dom)[0];
      copy.dom.addEventListener("keyup", function (e) {
        var target = e.target;
        if (target.tagName == 'INPUT') {
          videos_container.innerHTML = "";
          copy.load(true);
          copy.videos.fetch({term: target.value, remove: true}, function (err, response) {
            if (err)
              console.error(err);
            else {
              copy.renderVideos();
            }
            copy.load(false);
            if (copy.videos.models.length == 0)
              videos_container.innerHTML = "<label class='text-error'>No videos found!</label>"
          });
        }
      });
    };

    IndexView.prototype.load = function (loading) {
      var wheel_container = MyQ.query(".wheel_container", this.dom)[0];
      if (loading)
        wheel_container.classList.add("active")
      else
        wheel_container.classList.remove("active")
    };

    return IndexView;
  });
})();