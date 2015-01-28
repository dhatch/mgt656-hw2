var express = require('express');
var app = express();

app.get('/', function (request, response){
    response.send('Hello MGT-656!');
});

app.get('/nickname', function(request, response) {
    response.status(200)
            .type('text/plain')
            .send("vast narwhal");
});

app.listen(process.env.PORT || 4000);