// left
const budgetInit = document.getElementById("budget-init");
const calculateBtn = document.getElementById("calculate-btn");
const expenseName = document.getElementById("expense-name");
const expenseAmount = document.getElementById("expense-amount");
const addExpenseBtn = document.getElementById("add-btn");
// right
const budgetTotal = document.getElementById("budget-total");
const expenseTotal = document.getElementById("expense-total");
const balanceTotal = document.getElementById("balance-total");
const expenseTitle = document.getElementById("expense-title");
const expenseValue = document.getElementById("expense-value");
const bottomIcon = document.getElementById("bottom");


let expenseTable = [];


function calculer() {
    let expense_total = 0;
    expenseTable.forEach((expense) => {
        expense_total += expense.amount
    })

    expenseAmount.textContent = expense_total;
    balanceTotal.textContent = parseInt(budgetTotal.textContent) - expense_total;
    expenseTotal.textContent = expense_total
}



function addBudget() {
    budgetTotal.textContent = budgetInit.value;
    balanceTotal.textContent = budgetInit.value
    budgetInit.value = null;

}



function addExpense(){
    let expense = {
        titre: expenseName.value,
        amount: expenseAmount.valueAsNumber
    }
    expenseTable.push(expense);
    expenseName.value = null;
    expenseAmount.value = null;


    displayExpense()
    calculer()
}

function displayExpense(){
    bottomIcon.innerHTML = ``;
    expenseTable.forEach((expense) => {
        bottomIcon.innerHTML += `
        <div class="row">
            <div class="col">${expense.titre }</div>
            <div class="col">${expense.amount}</div>
            <div class="col">
                <div class="row">
                    <div class="col" style="color: blue;">
                        <i class="fa-solid fa-pen-to-square" onClick = "modifExpense(${expenseTable.indexOf(expense)})"></i>
                    </div>
                    <div class="col" style="color: red;"><i onClick = "deleteExpense(${expenseTable.indexOf(expense)})" class="fa-solid fa-trash" ></i>
                    </div>
                </div>
            </div>
        </div>
        
        `
    })

}

function deleteExpense(index) {
    expenseTable.splice(index, 1);

    displayExpense()
    calculer()
}

function modifExpense(index) {
    expenseName.value =  expenseTable[index].titre;
    expenseAmount.valueAsNumber = expenseTable[index].amount;
    expenseTable.splice(index, 1);

    displayExpense()
    calculer()
}



calculateBtn.addEventListener("click", addBudget)


addExpenseBtn.addEventListener("click", addExpense)





