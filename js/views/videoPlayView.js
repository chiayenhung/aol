(function () {
  define(['views/view'], function (View) {
    function VideoPlayView (options) {
      View.call(this, options);
    }

    VideoPlayView.prototype = new VideoPlayView();
    VideoPlayView.prototype.constructor = VideoPlayView;

    VideoPlayView.prototype.template = function (model) {
      var html = [
      "<div class='span1 offset10'>",
      "<a class='close_modal' href='#'>",
      "X",
      "</a>",
      "</div>",
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

    VideoPlayView.prototype.setHandlers = function () {
      var copy = this;
      this.dom.addEventListener("click", function (e) {
        var target = e.target;
        e.preventDefault();
        if (target.tagName == 'A') {
          copy.close();
        }
      });
    };

    VideoPlayView.prototype.close = function () {
      this.dom.classList.remove("show");
      this.dom.innerHTML = "";
    };

    return VideoPlayView;
  });
})();