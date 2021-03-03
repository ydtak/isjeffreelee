console.log(":D");

function init(options) {
  $('#jeff-free-button').click(function() {
    var deadline = getDeadline(options);
    var currentDate = new Date();
    if (deadline > currentDate) {
      alert("NO!!!!!!");
    } else {
      alert("YES HE DID IT!!!!!!");
    }
  });
}

function getDeadline(options) {
  var endYear = options.endtimeYear;
  var endMonth = options.endtimeMonth;
  var endDate = options.endtimeDate;
  var endHours = options.endtimeHours;
  var endMinutes = options.endtimeMinutes;
  var endSeconds = options.endtimeSeconds;

  return new Date(endYear, endMonth - 1, endDate, endHours, endMinutes, endSeconds);
}

(function ($) {
    $.fn.extend({
      countdown100: function(options) {
        var defaults = {
          endtimeYear: 0,
          endtimeMonth: 0,
          endtimeDate: 0,
          endtimeHours: 0,
          endtimeMinutes: 0,
          endtimeSeconds: 0,
        }

        var options =  $.extend(defaults, options);

        return this.each(function() {
          var obj = $(this);
          var timeNow = new Date();
          var deadline = getDeadline(options);
          console.log(deadline);
          if(Date.parse(deadline) < Date.parse(timeNow)) {
            var deadline = new Date(Date.parse(new Date()) + endDate * 24 * 60 * 60 * 1000 + endHours * 60 * 60 * 1000);
          }


          initializeClock(deadline);

          function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
              'total': t,
              'days': days,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds
            };
          }

          function initializeClock(endtime) {
            var daysSpan = $(obj).find('.days');
            var hoursSpan = $(obj).find('.hours');
            var minutesSpan = $(obj).find('.minutes');
            var secondsSpan = $(obj).find('.seconds');

            function updateClock() {
              var t = getTimeRemaining(endtime);

              daysSpan.html(t.days);
              hoursSpan.html(('0' + t.hours).slice(-2));
              minutesSpan.html(('0' + t.minutes).slice(-2));
              secondsSpan.html(('0' + t.seconds).slice(-2))

              if (t.total <= 0) {
                clearInterval(timeinterval);
              }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
          }
        });
      }
    });
})(jQuery);