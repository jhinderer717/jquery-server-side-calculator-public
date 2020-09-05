// requires
const express = require( 'express' );
const app = express();

// uses
app.use( express.static( 'server/public' ));

// globals
const port = 3000;

// spin up server
app.listen(port, ()=>{
    console.log('This is Dr. Mantis Toboggan M.D.', port);
});// end server up