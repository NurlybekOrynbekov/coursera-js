/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
    var addHours = Math.floor(interval/60) + hours;
    var addMinutes = Math.floor(interval%60) + minutes;


    if(addMinutes < 0 || addMinutes > 59) {
        addMinutes = Math.floor(addMinutes%60);
        addHours += 1;
    }
    if(addHours < 0 || addHours > 23) {
        addHours = Math.floor(addHours%24);
    }

    return addHours.toString().padStart(2, 0) + ':' + addMinutes.toString().padStart(2, 0);
};



// Определяем константу с информацией о количестве часов в сутках
var HOURS_PER_DAY = 24;
// Определяем константу с информацией сколько минут в часе
var MINUTES_PER_HOUR = 60;
/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
function solution(hours, minutes, interval){
       // Увеличиваем значение минут
       minutes += interval;

       // Увеличиваем значение часов на количество полных часов в интервале
       hours += Math.floor(minutes / MINUTES_PER_HOUR);
   
       // Так как мы увеличили минуты и часы на весь interval, то
       // мы можем выйти за пределы 60 минут у часа и 24 часов у суток.
       // Исключим эту ситуацию.
       minutes %= MINUTES_PER_HOUR;
       hours %= HOURS_PER_DAY;
   
       // Используем для формата часов и минут, как в часах 1 -> 01
       if (hours < 10) {
           hours = '0' + hours;
       }
   
       if (minutes < 10) {
           minutes = '0' + minutes;
       }
   
       // Возвращаем результат
       return hours + ':' + minutes;
}