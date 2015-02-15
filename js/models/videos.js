(function () {
  define(['models/collection', 'models/video'], function (Collection, Video) {
    function Videos (options) {
      Collection.call(this, options);
      this.Model = Video;
      this.page = 2;
      this.loading = false;
      this.end = false;
    }

    var ITEM_PER_PAGE = 25;

    Videos.prototype = new Collection();
    Videos.prototype.constructor = Videos;

    Videos.prototype.reset = function () {
      this.page = 2;
      this.loading = false;
      this.end = false;
    };

    Videos.prototype.lazyLoad = function (options, callback) {
      var copy = this;
      if (copy.end || copy.loading)
        return;
      if (!options)
        options = {params: {page: copy.page}};
      else {
        options.params = {};
        options.params.page = copy.page;
      }
      copy.loading = true;
      copy.fetch(options, function (err, response) {
        if (err) {
          this.end = true;
          callback.call(copy, err);
        }
        else {
          if (response.items.length < ITEM_PER_PAGE)
            this.end = true;
          this.page += 1;
          callback.call(copy, null, response);
        }
        copy.loading = false;
      });
    };

    return Videos;
  });
})();