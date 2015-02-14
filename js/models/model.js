(function () {
  define([], function () {
    function Model (options) {
      if (!options)
        return;
      this.attrs = options;
    }

    Model.prototype.get = function (key) {
      if (!key)
        return this.attrs.id;
      else
        return this.attrs[key];
    };

    return Model;
  });
})();