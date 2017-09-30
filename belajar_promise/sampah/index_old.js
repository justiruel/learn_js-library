const Promise = require('bluebird');

const shouldGiveError = false;
new Promise((resolve, reject) => {
    if (shouldGiveError) return reject("Oh no!, An error occurred!")
    resolve("This will be printed to the console on success");
})
.then((result)=>{
    console.log(result);
    //return "1";
/*	setTimeout(function() {
	    console.log(result);
	    return  "1"
	}, 2000)
*/

    for (x = 1; x<=1000000;x++){
	console.log(x);
    }	
    return  "selet"

})
.then((result)=>{
        console.log(result);
})
.catch(console.error)



//promise dalam promise
//promise delay
