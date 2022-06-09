
//This is the nodejs backend

const express = require('express');
const bp = require("body-parser");
const cors = require('cors');
const bodyParser = require('body-parser');
const wgServer = express();
const port = 60000;
const {Pool, Client} = require('pg');
const router = express.Router();
const https = require("https");
const http = require("http");
const fs = require("fs");

wgServer.use(cors());
wgServer.use(bp.json());
wgServer.use(bp.urlencoded({ extended: true }));
wgServer.use(bodyParser.json({limit: '50mb'}));
wgServer.use(bodyParser.urlencoded({ extended: true }));
wgServer.use(bodyParser.json());
wgServer.use(express.json());
wgServer.use("/", router);


//Defining of pgsql pool, client, and pool connection info
//Since the Postgres DB and react app are on the same server,
//the pg DB's port (5432) will only accept requests from localhost

const pool = new Pool(
    {
        user: '*****',
        host: '*****',
        database: 'bookinventory',
        password: '*****',
        port: 5432,
        max: 20,
        idleTimeoutMillis: 25000,
        connectionTimeoutMillis: 2000,
    }
)
 
const client = new Client ( //Not needed, but will keep anyways if client-based connections are needed in the future
                            //05/25/2022: Surprise, I needed it
    {
        user: '*****',
        host: '*****',
        database: 'bookinventory',
        password: '*****',
        port: 5432,
    }
)

//three pre-defined queries used at various times

const siteQuery = {
    //rowMode: 'array',
      text: 'SELECT * FROM inventory', //This grabs all info from the database, which the front-end then filters through.
  }                                     //Future development of the site may want to access various metrics that aren't currently used,
                                        //so all rows and columns, for now, will be gathered, and it would be a very long time,
                                        //possibly never, that even a very successful literature press would have more than
                                        //even 100 items listed

const invQuery = {
    text: 'SELECT id, title, author, description, genre, isbn, digital_only, digital_price, dl_link_epub, dl_link_mobi, dl_link_pdf, instock, print_price FROM inventory',
}

const idQuery = {
      text: 'SELECT id FROM inventory',
}

//From the pg documentation:
// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

pool.connect((err, client, done) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    };
})

//The client is used only for the MPage functions

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack);
    } else {
      console.log('connected');
    }
  })

//Routes

wgServer.get('/api/all', (req, res) => {
    console.log("received req");
    pool.query(siteQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        //console.log(result);
        const Data = result.rows;
        res.send(Data);
    })

})

wgServer.get('/api/catalogue', (req, res) => {
    console.log("received req");
    pool.query(siteQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        //console.log(result);
        const Data = result.rows;
        res.send(Data);
    })

})

wgServer.get('/api/invdata', (req, res) => {
    pool.query(invQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        //console.log(result);
        const Data = result.rows;
        res.send(Data);
    })

})

//wgServer.post - Where the Inventory Editor routes to

wgServer.post('/api/mpost', (req, res) => {

    console.log("\nChange(s) committed:\n");

    const rowData = req.body;
    const rowLength = Object.values(rowData.data).length; //used as the upper bound in the for-loop that performs the update-query for
    const changes = [];                                   //each field modified
    
    client.query(idQuery, (err, result) => {
        if(err) {
            console.log(err);
        } else {
                for(let i = 0; i < rowLength; i++) {
                    const tKey = Object.entries(rowData.data)[i][0]; //each field is passed as an array with length of two;
                    const tVal = Object.entries(rowData.data)[i][1]; //tKey and tVal are assigned to the respective key and value
                    if(tVal == "") { //if the invArea field was left blank, then the corresponding cell in the DB will be skipped over
                        console.log(tKey + ": " + "no change.")
                    } else if(tKey == "id") {
                        console.log("ID received, remains unchanged.") //ID should always be received by the pre-set value in the invArea and will always be unchanged
                    } else {
                        const tValStr = tVal.replace(`'`, `''`); //all apostrophes need to be set as '' before passed into the pg update query;
                                                                 //if not, each query would fail whenever an apostrophe was used in the inventory update form
                        const updateQuery = "UPDATE inventory SET " + tKey + " = " + `'${tValStr}'` + " WHERE id = " + rowData.data.id;
                        console.log(updateQuery);
                        client.query(updateQuery, (err, result) => {
                            if(err) {
                                console.log(err);
                            }
                    }   )
                }
            }
        }}
    )
    const msg = "Changes committed.";
    res.send(JSON.stringify({msg}));
})


wgServer.listen(port, () => {
    console.log(`\n\nNode.js server is successfully listening on port ${port}.`);
});
