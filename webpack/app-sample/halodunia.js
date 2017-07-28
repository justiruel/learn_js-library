var nama = require('./nama.js'); 		
module.exports = {
    tulis: function () {
        document.write('<span style="color:green">Halo Dunia dari modul yg berbeda!</span><br/>');
		document.write('<span style="color:green">Nama saya adalah</span> ');
		nama.saya();
		document.write('<span style="color:green">Saya sangat</span> '+nama.orangnya);
    },
};