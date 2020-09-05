$(document).ready(onReady);

function onReady(){
    console.log('in onReady');
    $(document).on('click', '.equalButton', checkFields);
    getItems();
    $(document).on('click', '.additionButton', doAddition);
    $(document).on('click', '.subtractionButton', doSubtraction);
    $(document).on('click', '.multiplicationButton', doMultiplication);
    $(document).on('click', '.divisionButton', doDivision);
    $(document).on('click', '.clearButton', clearInputs);
}

let lastOperator;

function clearInputs(){
    console.log('clearing fields');
    $('.fieldOne').val('');
    $('.fieldTwo').val('');
    lastOperator = undefined;
}

function doAddition(){
    console.log('in doAddition');
    lastOperator = '+';
}
function doSubtraction(){
    console.log('in doSubtraction');
    lastOperator = '-';
}
function doMultiplication(){
    console.log('in doMultiplication');
    lastOperator = '*';
}
function doDivision(){
    console.log('in doDivision');
    lastOperator = '/';
}

function checkFields(){
    console.log('in checkFields');
    if( $('.fieldOne').val() === '' || $('.fieldTwo').val() === '' 
        || isNaN( $('.fieldOne').val() ) || isNaN( $('.fieldTwo').val() ) 
        || lastOperator === undefined ){
        console.log(`fields don't check out`);
        console.log('Enter two numbers and an operator');
    }
    else{
        console.log('fields check out');
        captureInputs();
    }
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
    clearInputs();
} // end captureInputs

function getItems(){
    console.log('in getItems');
    // select ul & empty
    let el = $('.history');
    el.empty();
    // make GET call to server
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then(function(response){
        console.log('back from GET:', response);
        // loop through history
        for(let i=0; i<response.length; i++){
            // append items to DOM
            $('.history').append(`
                <li>${response[i].fieldOne} 
                ${response[i].operation} 
                ${response[i].fieldTwo} = 
                ${response[i].result}</li>
            `);
            $('.answer').replaceWith(`
            <h2 class="answer">${response[i].result}</h2>
            `);
        } // end for
    }).catch(function (err){
        console.log(err);
        alert('nope');
    }) // end ajax
} // end getItems