// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();
//const history = require('./public/modules/history.js');
let history = [];

// uses
app.use( express.static( 'server/public' ));
app.use(bodyParser.urlencoded({extended: true}));

// globals
const port = 3000;

// spin up server
app.listen(port, ()=>{
    console.log('This is Dr. Mantis Toboggan M.D.', port);
}); // end server up

// routes

app.get( '/history', (req, res)=>{
    console.log('/history GET hit');
    res.send(history);
}) // end history GET

app.post( '/history', (req, res)=>{
    console.log(req.body);
    // do math
    req.body.result = doMath(req.body);
    // push into history array
    history.push(req.body);
    res.sendStatus( 201 );
}) // end /history POST

function doMath(object){
    console.log('in doMath using:', object);
    if(object.operation === '+'){
        return Number(object.fieldOne) + Number(object.fieldTwo);
    }
    else if(object.operation === '-'){
        return Number(object.fieldOne) - Number(object.fieldTwo);
    }
    else if(object.operation === '*'){
        return Number(object.fieldOne) * Number(object.fieldTwo);
    }    
    else if(object.operation === '/'){
        return Number(object.fieldOne) / Number(object.fieldTwo);
    }
}