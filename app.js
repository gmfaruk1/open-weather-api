var http = require('http');
var url = 'https://api.openweathermap.org/data/2.5/forecast?q=istanbul,TR&appid=eb6ff754284566fd8ce9281c9a30c754'
var server = http.createServer(function(request,response){
var request = require('request');
request(url,function(err,res,body){

    var data = JSON.parse.apply(body);
    response.write("<html><body><div id='container'>");
    response.write("<h1>"+'city name - : ' + data['name']+'<br>'+ "</h1>"
);
response.write("<h3>"+'Temperture - : ' + data['temp']+'<br>'+ "</h3>"
);
response.write("<h2>"+'Sunset Time - : ' + new Date(data.sys['sunset']+1000)+"</h2>");
response.write("</div></body></html>");
response.end();



response.write('ciao');
response.end();
});


}).listen(8081);

