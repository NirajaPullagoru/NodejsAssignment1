var http = require('http');
var fs = require('fs')

// var readStreamm = fs.createReadStream(__dirname + '/config.json', 'utf8');

// readStreamm.on('data', function (chunk) {
//     var name = JSON.parse(chunk).name;
//     var phoneNumber = JSON.parse(chunk).phoneNumber;
//     var emailID = JSON.parse(chunk).emailID;
// })
console.log("Enter name, phone number and emailID in config.json")
fs.watch('config.json', (eventType, fileName) => {
    if (fileName) {
        fs.readFile(fileName, 'utf8', function (err, data) {

            var name = JSON.parse(data).name;
            var cell = JSON.parse(data).phoneNumber;
            var email = JSON.parse(data).email;


            if (name.length >= 5 && name.length <= 40 && (!(/[^a-zA-Z0-9]/.test(name))))
                console.log("Valid name")
            else
                console.log("Invalid name")

            if (cell.length == 10 && (!(/[^0-9]/.test(cell))))
                console.log("Valid phone number")
            else
                console.log("Invalid phone number")

            var code = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (code.test(String(email).toLowerCase()))
                console.log("Valid email ID")
            else
                console.log("Invalid email ID")

        });
    }

})