module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    this._values = [];
}


// Методы коллекции
Collection.prototype.values = function () {
    return this._values;
};

Collection.prototype.count = function () {
    return this._values.length;
};

Collection.prototype.at = function (index) {
    return this._values[index-1];
};

Collection.prototype.append = function (value) {
    if (value instanceof Collection) {
        this._values = this._values.concat(value.values());
    } else {
        this._values.push(value);
    }
};

Collection.prototype.removeAt = function (index) {
    index -= 1;
    if(index < 0) return false;
    var result = this._values.splice(index,1);
    return result.length ? true : false;
};

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (value) {
    var tmp = new Collection();
    value.forEach(element => {
        tmp.append(element);
    });
    return tmp;
};
