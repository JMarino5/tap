// Dependencies

const path = require('path');
const express = require('express');
const bp = require("body-parser");
const cors = require('cors');
const { json } = require('body-parser');
const bodyParser = require('body-parser');
const wgServer = express();
const port = 60000;
const Buffer = require('buffer/').Buffer 
const {Pool, Client} = require('pg');
const { release } = require('os');
const { isParameterPropertyDeclaration } = require('typescript');
const router = express.Router();

wgServer.use(cors());
wgServer.use(bp.json());
wgServer.use(bp.urlencoded({ extended: true }));
wgServer.use(bodyParser.json({limit: '50mb'}));
wgServer.use(bodyParser.urlencoded({ extended: true }));
wgServer.use(bodyParser.json());
wgServer.use(express.json());
wgServer.use("/", router);

//Defining of pgsql pool, client, and pool connection info

const pool = new Pool(
    {
        user: 'nodeaccess',
        host: '137.184.64.182',
        database: 'bookinventory',
        password: 'ihatetheantichrist',
        port: 5432,
        max: 20,
        idleTimeoutMillis: 25000,
        connectionTimeoutMillis: 2000,
    }
)
 
const client = new Client ( //Not needed, but will keep anyways if client-based connections are needed in the future
    {
        user: 'postgres',
        host: '137.184.64.182',
        database: 'bookinventory',
        password: 'postgres',
        port: 5432,
    }
)

const siteQuery = {
    //text: 'SELECT id, title, author, description, genre, isbn, digital_only, digital_price, dl_link_epub, dl_link_mobi, dl_link_pdf, instock, print_price, coverlink FROM inventory',
    //rowMode: 'array',
      text: 'SELECT * FROM inventory',
  }

const invQuery = {
    text: 'SELECT id, title, author, description, genre, isbn, digital_only, digital_price, dl_link_epub, dl_link_mobi, dl_link_pdf, instock, print_price FROM inventory',
}

const idQuery = {
      text: 'SELECT id FROM inventory',
}

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

pool.connect((err, client, done) => {
    if (err) {
        return console.error('Error acquiring client', err.stack)
    };
})

client.connect(err => {
    if (err) {
      console.error('connection error', err.stack);
    } else {
      console.log('connected');
    }
  })

wgServer.get('/', (req, res) => {
    pool.query(siteQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        //console.log(result);
        const Data = result.rows;
        res.send(Data);
    })

})

wgServer.get('/invdata', (req, res) => {
    pool.query(invQuery, (err, result) => {
        if (err) {
            console.log(err);
        }
        //console.log(result);
        const Data = result.rows;
        res.send(Data);
    })

})

wgServer.post('/mpost', (req, res) => {

    const rowData = req.body;
    const rowLength = Object.values(rowData.data).length;
    
    client.query(idQuery, (err, result) => {
        if(err) {
            console.log(err);
        } else {
            const count = Object.values(result.rows).length;
            if(Number(rowData.data.id) > count || Number(rowData.data.id) < 1) {
                console.log("Invalid ID number.");
            } else {
                for(let i = 0; i < rowLength; i++) {
                    const tKey = Object.entries(rowData.data)[i][0];
                    const tVal = Object.entries(rowData.data)[i][1];
                    if(tVal == "" || tKey == "id") {
                        console.log(tKey + ": " + "Nothing to do.")
                    } else {
                        let updateQuery;
                        let tValStr = tVal.replace(`'`, `''`);
                        console.log('\n\n'+tValStr+'\n\n');
                        updateQuery = "UPDATE inventory SET " + tKey + " = " + `'${tValStr}'` + "  WHERE id = " + rowData.data.id;
                        console.log(updateQuery);
                        client.query(updateQuery, (err, result) => {
                            if(err) {
                                console.log(err);
                            } else {
                                console.log("\nChange(s) committed:\n" + updateQuery)
                    }   })
                }
            }
        }}
    })
    const msg = "from server";
    res.send(JSON.stringify({msg}));
})

wgServer.listen(port, () => {
    console.log(`\n\nInventory server is successfully listening on port ${port}.`);
    console.log(__dirname);
});
