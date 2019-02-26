function compare(a, b) {
    if (a.name.length > b.name.length) return 1
    if (a.name.length < b.name.length) return -1
    return 0;
}

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var functions = [].slice.call(arguments, 1);

    functions = functions.sort();

    for (var i = 0; i < functions.length; i++) {
        collection = functions[i](collection);
    }

    return collection;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [].slice.call(arguments);
    return function select(collection) {
        var result = [];
        collection.forEach(element => {
            var obj = {};
            fields.forEach(field => {
                if(element.hasOwnProperty(field)) obj[field] = element[field];
            });
            result.push(obj);
        });
        return result;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filterIn(collection) {
        var result = collection.filter(element => values.includes(element[property]));

        return result;
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
