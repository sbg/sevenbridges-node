'use strict';

module.exports = {
    errFn: function(e) {
        console.log('Error occured', e);
        throw Error(e);
    }
}
