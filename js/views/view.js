(function () {
  define([], function () {
    function View (options) {
      if (options && options.dom)
        this.dom = options.dom
      else
        this.dom = document.createElement("div");
      if (options)
        this.model = options.model;
    }

    View.prototype.render = function () {};

    return View;
  });
})();