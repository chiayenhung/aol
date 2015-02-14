(function () {
  define(['models/model'], function (Model) {
    function Collection (options) {
      if (!options)
        return;
      this.models = [];
      this.url = options.url || 'url';
    }

    Collection.prototype.fetch = function (options, callback) {
      var request,
          copy = this,
          items, tmp;
      if (window.XMLHttpRequest)
        request = new XMLHttpRequest();
      else
        return;
      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          if (request.status == 200) {
            tmp = JSON.parse(request.response);
            items = tmp.items;
            copy.models = items
            callback.call(copy, null, copy);
          }
          else
            callback.call(copy, request.response);
        }
      };

      request.open("GET", copy.url, true);
      request.send();
    };

    return Collection;
  });
})();