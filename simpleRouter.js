var http = require('http');
var url = require("url");

var server = http.createServer(handler).listen(8080);

function handler(req, res) {
        processor(url.parse(req.url).pathname, req, res);
}

function processor (path, req, res) {

        function root () {
                res.write("Hello World!");
        }

        function user () {
                res.write("User section.");
        }

        function payment () {
                res.write("Payment section.");
        }

        var paths = {};
        paths["/"] = root;
        paths["/payment"] = payment;
        paths["/user"] = user;

        if (typeof paths[path] === 'function') {
                res.writeHead(200, {"Content-Type": "text/plain"});
                paths[path]();
        } else {
                res.writeHead(404, {"Content-Type": "text/plain"});
                res.write("No such file.");
        }
        res.end();

}
