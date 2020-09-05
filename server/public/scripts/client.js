$(document).ready(onReady);

function onReady(){
    console.log('in onReady');
    $(document).on('click', '.equalButton', captureInputs);
    getItems();

}

function captureInputs(){
    console.log('in captureInputs');
    // get user input $ place in object
    const objSend = {
        fieldOne: $('.fieldOne').val(),
        fieldTwo: $('.fieldTwo').val()
    }
    console.log('objSend', objSend);
    // send obj to server via POST thru ajax
    $.ajax({
        method: 'POST',
        url: '/history',
        data: objSend
    }).then(function(response){
        console.log('back from server with:', response);
        // update DOM with inventory
        getItems();
    }).catch(function(err){
        alert('problem!');
        console.log(err);
    }) // end ajax POST
} // end captureInputs

function getItems(){
    console.log('in getItems');
    // select ul & empty
    // make GET call to server
    // loop through history
    // append items to DOM
} // end getItems