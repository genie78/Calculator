$(document).ready(function() {

    var calCulatorContent = [
        [7,8,9,"/"],
        [4,5,6,"*"],
        [1,2,3,"-"],
        [0,"C","=","+"]
    ];
    var operationText = $('.operation-text');
    var firstNum = $('.first-num');
    var secondNum = $('.second-num');
    var operation = $('.operation');
    var answer = $('.answer');
    var buttonsDiv = $('.buttons-div');
    var operationObj = {
        "+": add = (x, y) => x + y,
        "-": minus = (x, y) => x - y,
        "*": multp = (x, y) => x * y,
        "/": devide = (x, y) => x / y 
    }
    const doSome = (x, y, op) => op(x,y);
 

    for (let i = 0; i < calCulatorContent.length; i ++){
        var buttons = $('<div>');
        buttons.addClass('d-flex justify-content-between flex-row my-2');       
        buttonsDiv.append(buttons);
        for (let j = 0; j < calCulatorContent.length; j ++){
            var button = $('<button>');
            if ((i === 3) && (j > 0) || (j === 3)){
                button.addClass('btn btn-warning');
            }else {
                button.addClass('btn btn-secondary');
            }
            button.addClass("data-button");
            button.attr('value', calCulatorContent[i][j]);
            button.text(calCulatorContent[i][j]);
            buttons.append(button);
        }
    }

    $('.data-button').on('click', function() {
        var valueOfButton = $(this).attr('value');
        if (valueOfButton == 'C'){
            answer.empty();
            firstNum.empty();
            secondNum.empty();
            operation.empty();
        }else if (valueOfButton == '='){
            let answ = doSome(parseInt(firstNum.text()), parseInt(secondNum.text()), operationObj[operation.text()] )
            answer.text(answ);
        }
        else if ((operation.text() != "") && !(["+", "-", "/", "*"].includes(valueOfButton))){
            secondNum.append(valueOfButton);
        }
        else if ((["+", "-", "/", "*"].includes(valueOfButton)) && (firstNum.text() == "")) {
            alert('Please first write the number');
        }
        else if ((operation.text() == "") && !(["+", "-", "/", "*"].includes(valueOfButton))){
            firstNum.append($(this).attr('value'));
        }else if ((operation.text() == "") && (["+", "-", "/", "*"].includes(valueOfButton)) && (firstNum.text() != "")){
            operation.text(valueOfButton);
        }
    })

    // class Calculator {
    //     constructor(list) {
    //         var buttonsDiv = $('.buttons-div');

    //         for (let i = 0; i < list.length; i ++){
    //             var buttons = $('<div>');
    //             buttons.addClass('d-flex justify-content-between flex-row my-2');       
    //             buttonsDiv.append(buttons);
    //             for (let j = 0; j < list.length; j ++){
    //                 var button = $('<button>');
    //                 if ((i === 3) && (j > 0) || (j === 3)){
    //                     button.addClass('btn btn-warning');
    //                 }else {
    //                     button.addClass('btn btn-secondary');
    //                 }
    //                 button.attr('value', list[i][j])
    //                 button.text(list[i][j]);
    //                 buttons.append(button);
    //             }
    //         }
    //     }


    // }
    
    // var calculator = new Calculator(calCulatorContent);
})