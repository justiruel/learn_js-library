const Promise = require('bluebird');
return Promise.all([
    new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("A1");
        }, 5000)
    }),
    new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("A2");
        }, 1000)
    }),
    new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("A3");
        }, 2000)
    })
])
.then(function(result) {
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
    
    return Promise.all([
        new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(result[0]+"next");
        }, 5000)
        }),
        new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(result[1]+"next");
            }, 1000)
        }),
        new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve(result[2]+"next");
            }, 2000)
        })
    ]);
})
.then(function(result2) {
    console.log(result2[0]);
    console.log(result2[1]);
    console.log(result2[2]);
});