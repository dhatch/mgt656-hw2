var express = require('express');
var app = express();

app.get('/nickname', function(request, response) {
    response.status(200)
            .type('text/plain')
            .send("vast narwhal");
});

app.listen(process.env.PORT || 4000);