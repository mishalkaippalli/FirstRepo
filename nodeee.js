// let http = require("http");

// let server = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html"})
//     res.end("Hello World");
// })

// server.listen(3000, console.log(`server running on port 3000`));


const { time } = require("console");
let fs = require("fs");

let curr = new Date();
let currstring = JSON.stringify(curr);
console.log(curr);

fs.writeFile("./fileee.txt", currstring, (err)=> {
    console.log(err);
});