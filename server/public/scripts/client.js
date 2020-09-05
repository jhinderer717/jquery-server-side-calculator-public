$(document).ready(onReady);

function onReady(){
    console.log('in onReady');
    $(document).on('click', '.equalButton', captureInputs);
    getItems();
    $(document).on('click', '.additionButton', doAddition);
    $(document).on('click', '.subtractionButton', doSubtraction);
    $(document).on('click', '.multiplicationButton', doMultiplication);
    $(document).on('click', '.divisionButton', doDivision);

}

let lastOperator;

function doAddition(){
    console.log('in doAddition');
    lastOperator = 'add';
}
function doSubtraction(){
    console.log('in doSubtraction');
    lastOperator = 'subtract';
}
function doMultiplication(){
    console.log('in doMultiplication');
    lastOperator = 'multiply';
}
function doDivision(){
    console.log('in doDivision');
    lastOperator = 'divide';
}

function captureInputs(){
    console.log('in captureInputs');
    // get user input $ place in object
    const objSend = {
        fieldOne: $('.fieldOne').val(),
        fieldTwo: $('.fieldTwo').val(),
        operation: lastOperator
    }
    console.log('sending objSend:', objSend);
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