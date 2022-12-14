  "use strict";
  // var a;

  // function x() {
  //   var result;
  //   var num1 = Number(document.getElementById("num1").value);
  //   var num2 = Number(document.getElementById("num2").value);
  //   switch (a) {
  //     case '+':
  //       result = num1 + num2;
  //       break;
  //     case '-':
  //       result = num1 - num2;
  //       break;
  //     case '*':
  //       result = num1 * num2;
  //       break;
  //     case '/':
  //       result = num1 / num2;
  //       break;
  //   }
  //   document.getElementById("result").innerHTML = result;
  // }
  $(document).ready( function () {


    // VARIABLES
    // ----------------------------------------------------------

    var amount, percent, result;
    var calculator = $('.calculator');
    var calculatorBill = calculator.find('.calculator__bill');
    var calculatorTip = calculator.find('.calculator__tip');
    var calculatorResult = calculator.find('.calculator__result');
    var tipAmount = calculator.find('.tip-amount');


    // INIT BILL
    // ----------------------------------------------------------

    $(window).on('DOMContentLoaded', function () {
        tipAmount.text( calculatorTip.val() + '%' );
        amount = calculatorBill.val() * 1;
        percent = calculatorTip.val() * 1;
        result = amount + amount * ( percent / 100 );
        calculatorResult.text( result.toFixed(2) + '$' );
    });


    // RANGE FUNCTION
    // ----------------------------------------------------------

    calculatorTip.on('change', function () {

        if ( calculatorBill.val() === '' || isNaN( calculatorBill.val() ) ) {
            alert('Enter bill amount, please!')
        } else {
            amount = calculatorBill.val() * 1;
        }

        tipAmount.text( calculatorTip.val() + '%' );
        percent = calculatorTip.val() * 1
        result = amount + amount * ( percent / 100 );
        calculatorResult.text( result.toFixed(2) + '$' );
    });

  });