(function () {
  define(['models/collection'], function (Collection) {
    function Videos (options) {
      Collection.call(this, options);
    }

    Videos.prototype = new Collection();
    Videos.prototype.constructor = Videos;

    return Videos;
  });
})();