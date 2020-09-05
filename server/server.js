// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const app = express();

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
app.post( '/history', (req, res)=>{
    console.log(req.body);
    res.send('hello I am Swedish plumber');
}) // end /history POST