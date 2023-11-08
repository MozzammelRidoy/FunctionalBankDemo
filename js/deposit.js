document.getElementById('bnt-deposit').addEventListener('click', function(){
   
   const newDepositAmount = getInputFieldValueById('deposit-input');
   if(isNaN(newDepositAmount)){
    alert('Invalid Amount');
    return;
            }
   /* 
    get previous deposit total by id
   */
    const previousDepositTotal = getTextElementValueById('deposit-total');
   

    /* 
    Calculate New deposit total
    */
   const newDepositTotal = previousDepositTotal + newDepositAmount;
    
   //set deposit total value.
   setTextElementValueById('deposit-total', newDepositTotal);


   //get previous balance by using the funcion
   const previousBalanceTotal = getTextElementValueById('balance-total');
   const newBalance = previousBalanceTotal + newDepositAmount;
   setTextElementValueById('balance-total', newBalance);





})