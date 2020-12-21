var getUserSync = require('./src/getUserSync');


var u1 = getUserSync('123');
console.log('user1', u1);

var u2 = getUserSync('12');
console.log('user2', u2);

var s = 3 + 4;
console.log('fin' + s);