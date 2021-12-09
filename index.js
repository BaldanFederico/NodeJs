const { request, response } = require("express");
var express= require("express");
var apiServer= express();
var fs=  require("fs");


console.log("funzia");
var a= 5;
var b= "3";
console.log(a+b);

var port= 3000;
var host= "localhost";


apiServer.listen(port,host, ()=>{
    console.log("server running at http://%s:%d", host, port);
});
var nome="Federico";
apiServer.get("/nome", (request,response) =>{
console.log("Nome dell'allievo", request ); //cosa legge il client
response.send("Il mio nome è"+ nome); //risposta al server
});
apiServer.get("/", (request,response) =>{
console.log("Sono in get", request ); //cosa legge il client
response.send("Ciao client sono in home"); //risposta al server
});
apiServer.get('/somma', (request,response) =>{
    console.log ("somma request", request.query);
    response.send("risultato= " + (request.query.a -(-request.query.b)));
});
// apiServer.get('/student', (request,response) =>{
//      console.log ("student id", request.query);
// //leggere il file
// fs.readFile("studenti.json", (err, data)=> {
//     if(err) {
//         console.log("error" + err);
//     } else {
//         var students= JSON.parse(data);
//         //for (i=0;i<students.length;i++){
//         //console.log("students"+i+":"+students[i].name);
//         //console.log("students"+i+":"+students[i].surname);
//         //console.log("students"+i+":"+students[i].id);
//         response.send(
//         students.find(x => x.id === request.query.id));
//         }
// });
apiServer.get('/student', (request,response) =>{
    console.log ("student id", request.query);
    fs.writeFile("studenti.json", (err,data) => {
    if(err) {
        console.log("error" + err);
    } else {
        function PUSH(){
        var students= JSON.parse(data);
        response.send(
        students.Push('response.query.name', 'request.query.surname', 'request.query.id'));
        }
}
});
});