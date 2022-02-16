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
        console.log(alert('Your Expenses are more than your income'));
    }
    else {
        const balance = income - totalExpenses;
        document.getElementById('total-expenses').innerText = totalExpenses;
        document.getElementById('remaining-balance').innerText = balance;
    }

}
document.getElementById('calculate-btn').addEventListener('click', function () {
    var RemainingBalance = getBalance('-input');
});
