import {obj}from './employee.js'
let  { getCadre, salary, getBenefits, calculateBonus, calculateTax, reimbursementEligibility }  = obj ; 
function getEmployeeInformation(inputSalary) {
    salary = inputSalary;
    console.log(salary)
    console.log('Cadre: ' + getCadre());
    console.log('Tax: ' + calculateTax());
    console.log('Benefits: ' + getBenefits());
    console.log('Bonus: ' + calculateBonus());
    console.log('Reimbursement Eligibility: ' + reimbursementEligibility() + '\n');
}

getEmployeeInformation(10000);
getEmployeeInformation(50000);
getEmployeeInformation(100000);

