const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash');
const checkBtn = document.querySelector('#check-btn');
const errorMsgContainer = document.querySelector('.error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');

const denomination = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

const calculateResultHandler = () => {
  let showError = false,
    errorMessage = '';
  const bill = parseInt(billAmount.value),
    cash = parseInt(cashGiven.value);

  if (bill <= 0) {
    errorMessage = 'Please add number greater than 0\n';
    showError = true;
  }

  if (cash < bill) {
    errorMessage += 'Cash amount to be greater than or equal to bill amount';
    showError = true;
  }

  if (cash === bill) {
    errorMessage += 'No cash to return';
    showError = true;
  }

  if (showError) {
    errorMsgContainer.innerText = errorMessage;
    return;
  }

  resetInnerText();

  const amountToBeReturned = cash - bill;
  calculateChange(amountToBeReturned);
};

const resetInnerText = () => {
  errorMsgContainer.innerText = '';
  noOfNotes.forEach((eachNode) => (eachNode.innerText = ''));
};
const calculateChange = (amount) => {
  denomination.forEach((value, index) => {
    if (amount / value >= 1) {
      let updateValue = Math.trunc(amount / value);
      noOfNotes[index].innerText = updateValue;
      amount %= value;
    }
  });
};

checkBtn.addEventListener('click', calculateResultHandler);
