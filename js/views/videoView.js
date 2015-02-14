(function () {
  define(['utils/MyQuery', 'utils/util', 'views/view'], function (MyQ, utils, View) {
    function VideoView (options) {
      View.call(this, options);
    }

    VideoView.prototype = new View();
    VideoView.prototype.constructor = VideoView;

    VideoView.prototype.render = function () {
      this.dom.innerHTML = this.template();
    };

    VideoView.prototype.template = function () {
      var html = [
      "<div class='header_field row-fluid show-grid'>",
      "<label class='video_title span4'>",
      this.model.get("title"),
      "<div class='span12'>",
      utils.timeString(this.model.get('duration')),
      "</div>",
      "</label>",
      "<div class='video_desc span4'>",
      this.model.get("description"),
      "</div>",
      "<div class='span4'>",
      "<img class='video_logo img-polaroid center-block' src='",
      this.model.get("image"),
      "'></img>",
      "</div>",
      "</div>",
      "<div class='video_wrap row'>",
      "</div>",
      ];
      return html.join("");
    };

    VideoView.prototype.setHandlers = function () {
      var copy = this;
      this.dom.addEventListener("click", function () {
        console.log(copy.model.attrs.id);
      });
      this.dom.addEventListener("click", function () {
        console.log(copy.model.attrs.title);
      });
    };

    return VideoView;
  });
})();