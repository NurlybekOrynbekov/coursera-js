// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var commands = command.split(' ');
    var commandName = commands[0];

    if(commandName === 'ADD') {
        return addContact(commands[1], commands[2]);
    } else if(commandName === 'REMOVE_PHONE') {
        return removePhone(commands[1])
    } else if(commandName === 'SHOW') {
        return showPhone()
    }
};

function addContact(name, phones) {
    if(!phoneBook.hasOwnProperty (name)) {
        phoneBook[name] = []
    }
    phones = phones.split(',')
    phones.forEach(phone => phoneBook[name].push(phone));
}

function removePhone(phone) {
    var keys = Object.keys(phoneBook);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var phones = phoneBook[key]
        var index = phones.indexOf(phone);
        if(index !== -1) {
            phoneBook[key].splice(index, 1)
            return true;
        }
    }
    return false;
}

function showPhone() {
    var result = []
    var keys = Object.keys(phoneBook).sort();
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var phones = phoneBook[key]
        if(phones.length === 0) continue;
        result.push(key.toString() + ': ' + phones.join(', '))
    }
    return result;
}
