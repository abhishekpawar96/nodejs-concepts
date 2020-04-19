require.resolve('find-me');

const printStars = require('./printStars');
printStars(10, 'Hi')


require('./ascii-art');
// console.log(require.cache);
//due to caching banner only logs once.
require('./ascii-art');

// due to function call and exports banner logs twice
require('./ascii-art')();

require = function() {
    return { 
        mocked: true
    };
};
 
const fs = require('fs');
console.log(fs);