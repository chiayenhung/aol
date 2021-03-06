(function () {
  define(['models/model'], function (Model) {
    function Collection (options) {
      if (!options)
        options = {};
      this.models = [];
      this.urlRoot = options.urlRoot || 'http://api.5min.com/search/';
      this.term = options.term || '';
      this.format = options.format || '/videos.json';
      this.Model = Model;
    }

    Collection.prototype.fetch = function (options, callback) {
      var request,
          copy = this,
          items, tmp,
          url, key, paramStr;
      if (window.XMLHttpRequest)
        request = new XMLHttpRequest();
      else
        return;
      request.onreadystatechange = function () {
        if (request.readyState == 4) {
          if (request.status == 200) {
            if (options && options.remove) 
              copy.models = [];
            tmp = JSON.parse(request.response);
            items = tmp.items;
            items.forEach(function (item) {
              copy.models.push(new copy.Model(item));
            });
            callback.call(copy, null, tmp);
          }
          else
            callback.call(copy, request.response);
        }
      };

      if (options.term)
        url = copy.urlRoot + options.term + copy.format;
      else
        url = copy.urlRoot + copy.term + copy.format;
      if (options.params) {
        paramStr = [];
        for (key in options.params) {
          paramStr.push(key + "=" + options.params[key]);
        }
        url += "?" + paramStr.join("&");
      }
      request.open("GET", url, true);
      request.send();
    };

    return Collection;
  });
})();