/**
 * @param {Function[]} operations
 * @param {Function} callback
 */
module.exports = function (operations, callback) {
    var promises = [];

    operations.forEach(oper => {
        promises.push(
            new Promise(function(resolve, reject) {
                oper(function(error, data) {
                    if(error) reject(error);
                    resolve(data);
                });
            })
        );
    });
    Promise.all(promises).then(function(data) {
        callback(null, data);
    }, function(error) {
        callback(error, null)
    });
};