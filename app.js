//Nodejs assignment-1

const readline = require('readline');
var quests = ['Enter name: ', 'Enter phone number: ', 'Enter email ID: ']
var i = 0;
var code = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Enter name: '
});

rl.setPrompt(quests[i])
rl.prompt();

rl.on('line', (result) => {
    if (i === 0)
        validName(result)
    else if (i === 1)
        validCell(result)
    else if (i === 2)
        validEmail(result)
}).on('close', () => {
    console.log('Have a great day!');
    process.exit(0);
});


var validName = function (result) {
    if (result.length >= 5 && result.length <= 40 && (!(/[^a-zA-Z0-9]/.test(result)))) {
        console.log("Valid name")
        i++;
        rl.setPrompt(quests[i])
        rl.prompt();
    } else {
        console.log("Invalid name. Please enter only Alphanumeric characters ranging between 5-40 in length")
        rl.setPrompt('Re-Enter the name: ')
        rl.prompt();
    }
}

var validCell = function (result) {
    if (result.length == 10 && (!(/[^0-9]/.test(result)))) {
        console.log("Valid phone number")
        i++;
        rl.setPrompt(quests[i])
        rl.prompt();
    } else {
        console.log("Invalid phone number. Please enter a 10 digits number")
        rl.setPrompt('Re-Enter the phone number: ')
        rl.prompt();
    }
}

var validEmail = function (result) {
    if (code.test(String(result).toLowerCase())) {
        console.log("Valid email ID")
        i++;
        rl.setPrompt(quests[i])
        rl.prompt();
    } else {
        console.log("Invalid email ID")
        rl.setPrompt('Re-Enter the email ID: ')
        rl.prompt();
    }
}

// Nodejs Assignment 2

var http = require('http');
var fs = require('fs')
var prev, curr

console.log(" The changes on readMe.txt is being monitored. Please make changes! ")
fs.readFile('readMe.txt', 'utf8', (err, data) => {
    //console.log('Previous data: ', data)
    prev = data;
})

var Diff = require('text-diff');
var diff = new Diff()
var textDiff
fs.watch('readMe.txt', (eventType, fileName) => {
    if (eventType = 'change') {
        fs.readFile('readMe.txt', 'utf8', (err, data) => {
            //console.log('Current data: ', data)
            curr = data;
            if (curr.length > prev.length) {
                textDiff = diff.main(prev, curr)
                console.log("Newly entered data: ", textDiff[1][1])
            }
            // else if(curr.length < prev.length) {
            //prev = data
            // }
        })
    }
})