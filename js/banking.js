/*function doubleIt (num){
      const result = num * 2;
      return result;
}

const first = doubleIt(5);
const second = doubleIt(7);
console.log(first);
console.log(second);
*/

function getInputValue(){
      const depositInput = document.getElementById('deposit-input');
      const depositAmountText = depositInput.value;
      const depositAmount = parseFloat(depositAmountText); 
      
       // clear input field
       depositInput.value = '';
      return depositAmount;  
}



document.getElementById('deposit-btn').addEventListener('click', function () {
      // const depositInput = document.getElementById('deposit-input');
      // const depositAmountText = depositInput.value;
      // const depositAmount = parseFloat(depositAmountText);
      const depositAmount = getInputValue(); 

      // get current deposit
      const depositTotal = document.getElementById('deposit-total');
      const depositTotalText = depositTotal.innerText;
      const previousDepositTotal = parseFloat(depositTotalText);

      depositTotal.innerText = depositAmount + previousDepositTotal;

      //update balance after deposit
      balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
      balanceTotal.innerText = previousBalanceTotal + depositAmount;

})

// handle withdraw btn
document.getElementById('withdraw-btn').addEventListener('click', function () {
      const withdrawInput = document.getElementById('withdraw-input');
      const withdrawInputText = withdrawInput.value;
      const withdrawAmount = parseFloat(withdrawInputText);

      // get current withdraw 
      const withdrawTotal = document.getElementById('withdraw-total');
      const withdrawTotalText = withdrawTotal.innerText;
      const previouseWithdrawTotal = parseFloat(withdrawTotalText);
      withdrawTotal.innerText = previouseWithdrawTotal + withdrawAmount;


      // update balance after withdraw
      const balanceTotal = document.getElementById('balance-total');
      const balanceTotalText = balanceTotal.innerText;
      const previousBalanceTotal = parseFloat(balanceTotalText);
      balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


      // clear input field
      withdrawInput.value = '';


})
