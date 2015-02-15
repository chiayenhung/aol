(function () {
  
  define([], function () {

    String.prototype.startWith = function (prefix) {
      if (!prefix)
        return false;
      return this.substr(0, 1) == prefix;
    };

    function queryId (node, id) {
      var prev = [node],
          cur;
      while (prev.length > 0) {
        cur = [];
        for (var index = 0; index < prev.length; index++) {
          if (prev[index].id == id)
            return prev[index];
          cur = cur.concat(Array.prototype.slice.call(prev[index].childNodes));
        }
        prev = cur;
      }
      return null;
    }

    function queryClass (node, className) {
      var prev = [node],
          res = [],
          cur;
      while (prev.length > 0) {
        cur = [];
        for (var index = 0; index < prev.length; index++) {
          if (prev[index].classList && prev[index].classList.contains(className))
            res.push(prev[index]);
          cur = cur.concat(Array.prototype.slice.call(prev[index].childNodes));
        }
        prev = cur;
      }
      return res;
    }

    function queryTag(node, tagName) {
      var prev = [node],
          res = [],
          cur;
      tagName = tagName.toUpperCase();
      while (prev.length > 0) {
        cur = [];
        for (var index = 0; index < prev.length; index++) {
          if (prev[index].tagName && prev[index].tagName == tagName)
            res.push(prev[index]);
          cur = cur.concat(Array.prototype.slice.call(prev[index].childNodes));
        }
        prev = cur;
      }
      return res;
    }

    var myQ = {
      query: function (queryStr, node) {
        if (queryStr.startWith("#")) {
          if (!node)
            return document.getElementById(queryStr.substring(1));
          else
            return queryId(node, queryStr.substring(1));
        }
        if (queryStr.startWith(".")) {
          if (!node)
            return document.getElementsByClassName(queryStr.substring(1));
          else
            return queryClass(node, queryStr.substring(1));
        }
        if (!node)
          return document.getElementsByTagName(queryStr);
        else
          return queryTag(node, queryStr);
      }
    };

    return myQ;
  });
})();