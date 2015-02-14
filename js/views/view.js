(function () {
  define(['utils/events'], function (Events) {
    function View (options) {
      if (options && options.dom)
        this.dom = options.dom
      else
        this.dom = document.createElement("div");
      if (options)
        this.model = options.model;
    }

    View.prototype = new Events();
    View.prototype.constructor = View;

    View.prototype.render = function () {};

    return View;
  });
})();