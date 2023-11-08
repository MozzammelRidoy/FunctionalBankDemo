document.getElementById('btn-withdraw').addEventListener('click',function(){
  
    const newWithdrawAmount = getInputFieldValueById('withdraw-input');
    if(isNaN(newWithdrawAmount)){
        alert('Invalid Amount');
        return;
                }
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if(newWithdrawAmount>previousBalanceTotal){
        alert('Ohh No!! Insaficient Funds');
        return;
    }
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    setTextElementValueById('balance-total', newBalanceTotal);
    


})