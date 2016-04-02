'use strict';

module.exports = {
    errFn: function(e) {
        console.log('[Error] ', e);
        throw e;
    }
}
