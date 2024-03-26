const loanAmountInput = document.querySelector(".loan-amount");
const interestRateInput = document.querySelector(".interest-rate");
const loanTenureInput = document.querySelector(".loan-tenure");

const loanEMIvalue = document.querySelector(".loan-emi .value");
const totalInterestValue = document.querySelector("total-interest .value");
const totalAmountValue = document.querySelector("total-amount .value");

const calculateBtn = document.querySelector("clculate-btn");

let loanAmount = parseFloat(loanAmountInput.value);
let interestRate = parseFloat(interestRateInput.value);
let loanTenure = parseFloat(loanAmountInput.value);

let interest = interestRate / 12 / 100;

const calculateEMI = () => {
    let emi =  loanAmount * interest * (Math.pow (1 + interest , loanTenure) / (Math.pow (1 + interest, loanTenure) - 1));

    return emi;
};

const updateData = () => {
    loanEMIvalue.innerHTML = Math.round(emi);

    let totalAmount = Math.rouund(loanTenure * emi);
    totalAmountValue.innerHTML = totalAmount;

    let totalInterstPayable = Math.round(totalAmount - loanAmount);
    totalInterestValue.innerHTML = totalInterstPayable;
    
};
