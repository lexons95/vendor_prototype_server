var express = require('express');
var router = express.Router();
var connection = require('../db.config');

const tableName = "CampaignProducts";

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
});

router.get('/:id', function(req, res, next) {
    // let productId = req.params.id;
    // let query = `SELECT * FROM ${tableName} WHERE campaign_id = ${productId}`;
    // connection.query(query, function(err,result,fields) {
    //     if(err){
    //         res.status(500).send(err);        
    //     }
    //     else {
    //         res.send(result)
    //     }
    // });

    let productId = req.params.id;
    let query = `SELECT Products.id, name, price FROM ${tableName} LEFT JOIN Products ON ${tableName}.product_id = Products.id WHERE campaign_id = ${productId}`;
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
    // let query = `INSERT INTO ${tableName} SET ? ON DUPLICATE KEY UPDATE ?`;
    // let query = `INSERT INTO ${tableName} SET ?`;
    console.log('req.body',req.body)
    // let item = [req.body[0], req.body[1]]
    let item = req.body;


    if (item && item.length > 0) {
        let keys = Object.keys(item[0]);
        let values = [item.map( obj => keys.map( key => obj[key]))];
        let query = 'INSERT INTO ' + tableName + ' (' + keys.join(',') + ') VALUES ?';
        connection.query(query, values, function(err, result) {
            //if(err) throw err
            if (err) {
                console.log('err',err)
                res.status(500).send(err)
            } else {                
                res.send(result)
            }
        })
    }
    else {
        res.send("No Data provided")
    }
});

router.post('/update', function(req, res, next) {
    // let query = `UPDATE ${tableName} SET ? `;
    // let item = req.body
    // query += `WHERE id = ${item.id}`

    let query = `INSERT INTO ${tableName} SET ? ON DUPLICATE KEY UPDATE `;
    let item = req.body
    // query += `WHERE id = ${item.id}`

    let updateSql = "";
    let itemKeys = Object.keys(item);
    itemKeys.forEach((aKey,index)=>{
        if (aKey != "id") {
            updateSql += `${aKey}='${item[aKey]}'${itemKeys.length == index+1 ? "" : ", "} `
        }
    })
    query += updateSql;


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
