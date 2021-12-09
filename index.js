const { request, response } = require("express");
var express= require("express");
var apiServer= express();



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