function displayMailingLabel(fullName, address, city, state, zip) {
    console.log(`Fullname: ${fullName}`);
    console.log(`Fullname: ${address}`);
    console.log(`Fullname: ${city}`);
    console.log(`Fullname: ${state}`);
    console.log(`Fullname: ${zip}`);
}

displayMailingLabel();

function addNumbers (num1,num2){
    let number1 = num1
    let number2 = num2
    let sum = number1 + number2; 
    console.log(sum)
}
    addNumbers(300,5)

    function subNumbers (num3,num4){
    let number3 = num3
    let number4 = num4
    let sum = number3 - number4;
    console.log(sum)
}
    subNumbers(300,5)

    function displayReciept(amountPaid,totalDue){
    let message;
    let changeDue = amountPaid-totalDue;
    if(amountPaid<totalDue){
        message='needs to pay:';
    }
    else {
        message = 'You paid enough'
    }
  console.log('$'+ changeDue + message)
    }
    displayReciept(459,500);


