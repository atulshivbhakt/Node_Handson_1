const http = require('http')
const data =require('./data')

const server=http.createServer((request,response) =>{
    // console.log(request.url);
    if(request.url ==='/'){
        response.write("Hello World")
        response.end();
    }
    else if(request.url==='/html'){
        response.write("<h1>Hello My New World</h1>")
        response.end();
    }
    else if(request.url==='/json'){
            const stringData=JSON.stringify(data);
            response.write(stringData);
            response.end();
    }    
})
server.listen(5000,()=>{
    console.log("Server started at 5000");
})