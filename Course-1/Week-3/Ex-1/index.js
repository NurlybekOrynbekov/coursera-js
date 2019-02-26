function add(value, type) {

    if (isNaN(value) || value < 0) {
        throw new TypeError('Wrong value');
    }

    if (type === 'years') {
        this.date.setUTCFullYear(this.date.getFullYear() + value);
    } else if(type === 'months') {
        this.date.setUTCMonth(this.date.getMonth() + value);
    } else if(type === 'days') {
        this.date.setUTCDate(this.date.getDate() + value);
    } else if(type === 'hours') {
        this.date.setUTCHours(this.date.getHours() + value);
    } else if(type === 'minutes') {
        this.date.setUTCMinutes(this.date.getMinutes() + value);
    } else {
        throw new TypeError('Wrong type');
    }
    return this;
}

function subtract(value, type) {

    if (isNaN(value) || value < 0) {
        throw new TypeError('Wrong value');
    }

    if (type === 'years') {
        this.date.setUTCFullYear(this.date.getFullYear() - value);
    } else if(type === 'months') {
        this.date.setUTCMonth(this.date.getMonth() - value);
    } else if(type === 'days') {
        this.date.setUTCDate(this.date.getDate() - value);
    } else if(type === 'hours') {
        this.date.setUTCHours(this.date.getHours() - value);
    } else if(type === 'minutes') {
        this.date.setUTCMinutes(this.date.getMinutes() - value);
    } else {
        throw new TypeError('Wrong type');
    }
    return this;    
}

/**
 * @param {String} date
 * @returns {Object}
 */
module.exports = function (date) {
    var date = new Date(date);
    var obj = {
        date: date,
        add: add,
        subtract: subtract,
        get value() {
            var date = this.date;
            return `${date.getUTCFullYear()}-${(date.getUTCMonth() + 1).toString().padStart(2, 0)}-${date.getUTCDate().toString().padStart(2, 0)} ` + 
            `${date.getUTCHours().toString().padStart(2, 0)}:${date.getUTCMinutes().toString().padStart(2, 0)}`;
        }
    };
    return obj;
};
