const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
    process.exit(1);
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
    console.log('hi');
    console.log('');
});

const obj = {
    hello: function() {
        console.log('hi');
        console.log('hi');
        console.log('hi');
        console.log('hello');
        console.log('hi');
        console.log('hi');
        console.log('hi');
    },
};

obj();

console.log('hi');
// class A {
//     foo() {
//         console.log('hello world'); /* hi */
//     }
// }
