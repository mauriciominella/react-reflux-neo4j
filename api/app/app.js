var express = require('express');
var cors = require('cors')
var app = express();

var neo4j = require('node-neo4j');
var db = new neo4j('http://neo4j:test@neo4j:7474');

app.use(cors())

app.use('/', express.static(__dirname + '/view'));
function insertRelationship (root_id, target_id, type) {
    db.insertRelationship(root_id, target_id, type, {},
        function (err, relationship) {
            console.log(err);
            if (err) throw err; 
        });
}

function insertOption (next, callback) {
    const optionId = parseInt(Math.random() * 100);
    db.insertNode({
        id: optionId,
        name: 'Opção ' + optionId,
    }, ['Option'], function (err, node) {
        if (err) throw err;
        callback(node);
    });
}

app.get('/tools/load', function (req, res, next) {
    const mealId = parseInt(Math.random() * 100);
    db.insertNode({
        id: mealId,
        name: 'Café da manhã ' + mealId,
    }, ['Meal'], function (err, node) {
        if (err) return next(err);
        insertOption(next, function (option) {
            console.log('id=' + node._id + ',optionid=' + option._id);
            insertRelationship(node._id, option._id, 'IS_PART_OF');
        });

    });

    const recipeId = parseInt(Math.random() * 100);
    db.insertNode({
        id: recipeId,
        name: 'Receita ' + recipeId,
    }, ['Recipe'], function (err, node) {
        if (err) return next(err);
    });

    res.json({});
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

app.get('/meals', function (req, res, next) {
    db.cypherQuery("MATCH (meal:Meal) RETURN meal", function (err, result) {
        if (err) return next(err);
        res.json(result.data);
    });
});

app.listen(3000, function () {
    console.log('started');
});
