(function () {
  define(['views/view'], function (View) {
    function VideoView (options) {
      View.call(this, options);
    }

    VideoView.prototype = new View();
    VideoView.prototype.constructor = VideoView;

    VideoView.prototype.render = function () {

    };

    VideoView.prototype.template = function () {

    };

    return VideoView;
  });
})();