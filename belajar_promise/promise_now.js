const Promise = require('bluebird');


function doSomethingAsync(value) {
    return new Promise((resolve,reject) => {
        resolve(value);
    });
}


function doAsync(value) {
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            resolve(value+"asek");
        }, 2000)
    });
}



let promises = [];
for (i = 0; i < 5; ++i) {
    promises.push(doAsync("fun"+i));
}
return Promise.all(promises)
.then((results) => {
    let promises2 = [];
    for (i = 0; i < 5; ++i) {
        console.log(i, results[i]);
        promises2.push(doSomethingAsync(results[i]+"next"));
    }
    return Promise.all(promises2)
})
.then((results2) => {
    for (i = 0; i < 5; ++i) {
        console.log(i, results2[i]);
    }
})
.catch((e) => {
    // Handle errors here
    console.log("error cuy");
});


/*function doSomethingAsync(value) {
    return new Promise((resolve,reject) => {
        resolve(value);
    });
}

let promises = [];
for (i = 0; i < 5; ++i) {
    promises.push(doSomethingAsync("A"+i));
}
return Promise.all(promises)
.then((results) => {
    let promises2 = [];
    for (i = 0; i < 5; ++i) {
        console.log(i, results[i]+"cuy");
        promises2.push(doSomethingAsync(results+"next"));
    }
    return Promise.all(promises2)
})
.then((results2) => {
    for (i = 0; i < 5; ++i) {
        console.log(i, results2[i]);
    }
})
.catch((e) => {
    // Handle errors here
    console.log("error cuy");
});*/