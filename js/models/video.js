(function () {
  define(['models/model'], function (Model) {
    function Video (options) {
      Model.call(this, options);
    }

    Video.prototype = new Model();
    Video.prototype.constructor = Video;

    return Video;
  });
})();