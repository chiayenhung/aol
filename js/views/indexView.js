(function () {
  define(['utils/MyQuery', 'views/view'], function (MyQ, View) {
    function IndexView (options) {
      View.call(this, options);
      this.videos = options.videos;
    }

    IndexView.prototype = new View();
    IndexView.prototype.constructor = IndexView;

    IndexView.prototype.template = function () {
      var html = [
      "<div class='form-inline control_bar'>",
      "<div class='form-group'>",
      "<label>Search Bar</lable>",
      "<input class='form-control' placeholder='search term'>",
      "</div>",
      "</div>"
      ];
      return html.join("");
    };

    IndexView.prototype.render = function () {
      this.dom.innerHTML = this.template();
    };

    IndexView.prototype.setHandlers = function () {

    };

    return IndexView;
  });
})();