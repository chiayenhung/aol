(function () {
  define([], function () {
    function Model (options) {
      if (!options)
        return;
      this.attrs = options;
    }

    return Model;
  });
})();