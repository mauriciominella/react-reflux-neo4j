var express = require('express');
var cors = require('cors')
var app = express();

var neo4j = require('node-neo4j');
var db = new neo4j('http://neo4j:test@neo4j:7474');

app.use(cors())

app.use('/', express.static(__dirname + '/view'));

app.get('/tools/load', function (req, res, next) {
    const randomId = parseInt(Math.random() * 100);
    db.insertNode({
        id: randomId,
        name: 'Darth Vader #' + randomId,
        sex: 'male'
    }, ['Person'], function (err, node) {
        if (err) return next(err);

        res.json(node);
    });
});

app.get('/tools/drop', function (req, res, next) {
    db.cypherQuery("MATCH (n) DETACH DELETE n", function (err, result) {
        if (err) return next(err);
        res.json(result);
    });
});

app.get('/persons', function (req, res, next) {
    db.cypherQuery("MATCH (person:Person) RETURN person", function (err, result) {
        if (err) return next(err);
        res.json(result.data);
    });
});


app.listen(3000, function () {
    console.log('started');
});
