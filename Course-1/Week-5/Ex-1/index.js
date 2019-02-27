module.exports = {

    events: {},

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (!this.events.hasOwnProperty(event)) this.events[event] = []
        this.events[event].push({
            subscriber: subscriber,
            handler: handler
        });
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if(this.events.hasOwnProperty(event)) {
            this.events[event] = this.events[event].filter(event => event.subscriber != subscriber);
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {

        if(this.events.hasOwnProperty(event)) {
            this.events[event].forEach(event => {
                event.handler.call(event.subscriber);
            });
        }

        return this;
    }
};
