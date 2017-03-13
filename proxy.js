var proxy=require('http-proxy').createProxyServer({
     target: 'ws://localhost:3001',
     ws:true
}),
     http=require('http');

proxy.on(function(err,req,res){
     res.writeHead(500,{
               'Content-Type':'text/plain'
     });
});

var server=http.createServer(function(req,res){

     var host = req.headers.host;

     switch(host){

          case 'http://www.molichat.com':

          proxy.web(req,res,{ target: 'ws://localhost:3001' });

          break;

          case 'http://molichat.com':

          proxy.web(req, res, { target: 'ws://localhost:3001' });

          break;

          default: 

               //res.writeHead(200, { 

                    //'Content-Type': 'text/plain' 

               //}); 

               //res.end('Welcome to my server!');

               proxy.web(req, res, { target: 'ws://localhost:3001' });

          }


});

console.log("listening on port 3000")

server.listen(3000);