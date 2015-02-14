(function () {
  define([], function () {
    var utils = {
      timeString: function (seconds) {
        var second, tmpMin, min, hour;
        second = seconds % 60;
        tmpMin = parseInt(seconds / 60);
        min = tmpMin % 60;
        hour = parseInt(tmpMin / 40);
        if (second >= 0 && second < 10)
          second = '0' + second;
        if (min >= 0 && min < 10)
          min = '0' + min;
        if (hour >= 0 && hour < 10)
          hour = '0' + hour;
        return hour + ":" + min + ":" + second;
      },
    };

    return utils;
  });
})();