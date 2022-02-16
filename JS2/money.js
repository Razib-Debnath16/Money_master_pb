// Get the balance after expenses

function getBalance(product) {
    var incomeInput = document.getElementById('income' + product);
    const income = parseInt(incomeInput.value);
    var foodInput = document.getElementById('food' + product);
    const foodCost = parseInt(foodInput.value);
    var rentInput = document.getElementById('rent' + product);
    const rentCost = parseInt(rentInput.value);
    var clothInput = document.getElementById('cloth' + product);
    const clothCost = parseInt(clothInput.value);
    var totalExpenses = foodCost + rentCost + clothCost;
    if (totalExpenses > income) {
        console.log(alert('Your Expenses are more than your income.Please,ensure you are enter correct number'));
    }
    else {
        const balance = income - totalExpenses;
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('remaining-balance').innerText = balance;
        return balance;
    }

}

// calculate saving amount and remaining balance

function getRemainingBalance() {
    var savingInput = document.getElementById('save-input');
    const savingPercentage = parseFloat(savingInput.value);
    var savingAmount = (parseInt(document.getElementById('income-input').value) * savingPercentage) / 100;
    document.getElementById('saving-amount').innerText = savingAmount;
    document.getElementById('remaing-balance').innerText = getBalance('-input') - savingAmount;
}
// using addEventListener on calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    var afterExpenseBalance = getBalance('-input');
});
// using addEventListener on save button
document.getElementById('save-btn').addEventListener('click', function () {
    var remainingBalance = getRemainingBalance();
})
