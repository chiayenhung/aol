(function () {
  define([], function () {
    function View (options) {
      if (options && options.dom)
        this.dom = options.dom
      else
        this.dom = document.createElement("div");
    }

    View.prototype.render = function () {};

    return View;
  });
})();