(function () {
  define([], function () {

    function Events () {
      this.eventMap = {};
    }

    Events.prototype.on = function (eventName, handler) {
      if (eventName in this.eventMap) {
        this.eventMap[eventName].push(handler);
      }
      else
        this.eventMap[eventName] = [handler];
      return this;
    };

    Events.prototype.trigger = function (eventName) {
      var args = Array.prototype.slice.call(arguments, 1);
      if (eventName in this.eventMap) {
        this.eventMap[eventName].forEach(function (handler) {
          handler.apply(this, args);
        });
      }
      return this;
    };

    Events.prototype.off = function (eventName) {
      if (eventName in this.eventMap) {
        delete this.eventMap[eventName];
      }
      return this;
    };

    return Events;

  });
})();