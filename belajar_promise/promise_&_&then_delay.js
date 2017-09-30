const Promise = require('bluebird');

return new Promise(function(resolve, reject) {
    let result = 'A is done'
    console.log(result)
    resolve(result); //ini jadi result
})
.then(function(result) {
    return new Promise(function(resolve, reject) {
        var result2 = 'B is done'
        setTimeout(function() {
            console.log("dari A :"+result)
            console.log(result2)
            resolve(result2);
        }, 5000)
    })
}) 
.then(function(result) {
    return new Promise(function(resolve, reject) {
        var result2 = 'C is done'
        setTimeout(function() {
            console.log("dari B :"+result)
            console.log(result2)
            resolve(result2);
        }, 2000)
    })
})
.delay(10000).then(function(result) {
    return new Promise(function(resolve, reject) {
        var result2 = 'D is done'
        setTimeout(function() {
            console.log("dari C :"+result)
            console.log(result2)
            resolve(result2);
        }, 2000)
    })
})