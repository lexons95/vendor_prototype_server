var express = require('express');
var router = express.Router();
var connection = require('../db.config');

const tableName = "Products";

router.get('/', function(req, res, next) {
    let query = `SELECT * FROM ${tableName}`;
    connection.query(query,function(err,result,fields) {
        if(err){
            res.status(500).send(err);       
        }
        else {
            res.send(result)
        }
    });

    // connection.query('SHOW tables', function(err, tables){ 
    //     console.log(tables);
    // });
});

router.get('/:id', function(req, res, next) {
    let productId = req.params.id;
    let query = `SELECT * FROM ${tableName} WHERE id = ${productId}`;
    connection.query(query, function(err,result,fields) {
        if(err){
            res.status(500).send(err);    
        }
        else {
            res.send(result)
        }
    });
});

router.post('/add', function(req, res, next) {
    let query = `INSERT INTO ${tableName} SET ? `;
    let item = req.body;
    // let updateSql = "";
    // let itemKeys = Object.keys(item);
    // itemKeys.forEach((aKey)=>{
    //     if (aKey != "id") {
    //         updateSql += `${aKey}='${item[aKey]}' `
    //     }
    // })
    // query += updateSql;
    connection.query(query, item, function(err, result) {
        //if(err) throw err
        if (err) {
            console.log('err',err)
            res.status(500).send(err)
        } else {                
            res.send(result)
        }
    })
});

router.post('/update', function(req, res, next) {
    let query = `UPDATE ${tableName} SET ? `;
    let item = req.body
    query += `WHERE id = ${item.id}`
    connection.query(query, item, function(err, result) {
        //if(err) throw err
        if (err) {
            console.log('err',err)
            res.status(500).send(err)
        } else {                
            res.send(result)
        }
    })
});


module.exports = router;