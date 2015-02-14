(function () {
  define(['models/collection', 'models/video'], function (Collection, Video) {
    function Videos (options) {
      Collection.call(this, options);
      this.Model = Video;
    }

    Videos.prototype = new Collection();
    Videos.prototype.constructor = Videos;

    return Videos;
  });
})();