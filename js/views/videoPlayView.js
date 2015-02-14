(function () {
  define(['views/view'], function (View) {
    function VideoPlayView (options) {
      View.call(this, options);
    }

    VideoPlayView.prototype = new VideoPlayView();
    VideoPlayView.prototype.constructor = VideoPlayView;

    VideoPlayView.prototype.template = function (model) {
      var html = [
      "<video class='video span4 offset4' height='240' src='",
      model.get("videoUrl"),
      "' controls>",
      "</video>"
      ];
      return html.join("");
    };

    VideoPlayView.prototype.render = function (model) {
      this.dom.innerHTML = this.template(model);
      this.dom.classList.add("show");
      this.dom.style.height = document.body.scrollHeight + "px";
    };

    return VideoPlayView;
  });
})();