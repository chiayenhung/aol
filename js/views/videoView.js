(function () {
  define(['utils/MyQuery' ,'views/view'], function (MyQ, View) {
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
      "<div class='video_content'>",
      this.model.attrs.id,
      "</div>"
      ];
      return html.join("");
    };

    VideoView.prototype.setHandlers = function () {
      var copy = this;
      this.dom.onclick = function () {
        console.log(copy.model.attrs.id);
      };
    };

    return VideoView;
  });
})();