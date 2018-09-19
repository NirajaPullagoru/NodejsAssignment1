var http = require('http');
var fs = require('fs')

// var readStreamm = fs.createReadStream(__dirname + '/config.json', 'utf8');

// readStreamm.on('data', function (chunk) {
//     var name = JSON.parse(chunk).name;
//     var phoneNumber = JSON.parse(chunk).phoneNumber;
//     var emailID = JSON.parse(chunk).emailID;
// })


//console.log("Enter name, phone number and emailID in config.json")


// fs.watch('config.json', (eventType, fileName) => {
//     if (fileName) {
//         fs.readFile(fileName, 'utf8', function (err, data) {

//             var name = JSON.parse(data).name;
//             var cell = JSON.parse(data).phoneNumber;
//             var email = JSON.parse(data).email;


//             if (name.length >= 5 && name.length <= 40 && (!(/[^a-zA-Z0-9]/.test(name))))
//                 console.log("Valid name")
//             else
//                 console.log("Invalid name")

//             if (cell.length == 10 && (!(/[^0-9]/.test(cell))))
//                 console.log("Valid phone number")
//             else
//                 console.log("Invalid phone number")

//             var code = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//             if (code.test(String(email).toLowerCase()))
//                 console.log("Valid email ID")
//             else
//                 console.log("Invalid email ID")

//         });
//     }

// })


// const readline = require('readline');
// const r1 = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
// // const r2 = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });
// // const r3 = readline.createInterface({
// //     input: process.stdin,
// //     output: process.stdout
// // });

// r1.question('Enter name: ', (result) => {
//     if (result.length >= 5 && result.length <= 40 && (!(/[^a-zA-Z0-9]/.test(result)))) {
//         console.log("Valid name")
//     } else
//         console.log("Name should contain only Alphanumeric values. Please re enter the name")
// })

const readline = require('readline');
var code = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter name: '
});

rl.setPrompt('Enter name: ')
rl.prompt();

rl.on('line', (result) => {
    if (result.length >= 5 && result.length <= 40 && (!(/[^a-zA-Z]/.test(result)))) {
        console.log("Valid name")
        rl.setPrompt('Enter phone number: ')
        rl.prompt();

    } else if (result.length == 10 && (!(/[^0-9]/.test(result)))) {
        console.log("Valid phone number")
        rl.setPrompt('Enter email ID: ')
        rl.prompt();
    } else if (code.test(String(result).toLowerCase())) {
        console.log("Valid email ID")
        console.log('Have a great day!');
        process.exit(0);
    } else {
        //console.log("Invalid name. Please enter only Alphanumeric characters ranging between 5-40 in length")
        //console.log("Invalid phone number. Please enter a 10 digits number")
        //console.log("Invalid email ID")
        console.log("****Invalid input****")
        rl.setPrompt('Re-Enter the value: ')
        rl.prompt();
    }
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});