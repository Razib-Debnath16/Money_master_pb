// Get the balance after expenses

function getBalance(product) {
    var incomeInput = document.getElementById('income' + product);
    const income = parseInt(incomeInput.value);
    if (incomeInput.value == "") {
        console.log(alert('Please, enter your income'));
    }
    else if ((isNaN(income) == true || income < 0) && incomeInput.value != "") {
        console.log(alert('Please, input a valid number for Income '));
    }
    var foodInput = document.getElementById('food' + product);
    const foodCost = parseInt(foodInput.value);
    if (foodInput.value == "") {
        console.log(alert('Please, enter your food cost'));
    }
    else if ((isNaN(foodCost) == true || foodCost < 0) && foodInput.value != "") {
        console.log(alert('Please, input a valid number for Food Cost'));
        foodCost = 0;
    }
    var rentInput = document.getElementById('rent' + product);
    const rentCost = parseInt(rentInput.value);
    if (rentInput.value == "") {
        console.log(alert('Please, enter your rent cost'));
    }
    else if ((isNaN(rentCost) == true || rentCost < 0) && rentInput.value != "") {
        console.log(alert('Please, input a valid number for Rent Cost'));
        rentCost = 0;
    }
    var clothInput = document.getElementById('cloth' + product);
    const clothCost = parseInt(clothInput.value);
    if (clothInput.value == "") {
        console.log(alert('Please, enter your clothes cost'));
    }
    else if ((isNaN(clothCost) == true || clothCost < 0) && clothInput.value != "") {
        console.log(alert('Please, input a valid number for Cloth Cost'));
        clothCost = 0;
    }
    if ((((isNaN(income) != true || income > 0) && incomeInput.value != "") && ((isNaN(foodCost) != true || foodCost > 0) && foodInput.value != "") && ((isNaN(rentCost) != true || rentCost > 0) && rentInput.value != "") && ((isNaN(clothCost) != true || clothCost > 0) && clothInput.value != ""))) {

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


};

// calculate saving amount and remaining balance

function getRemainingBalance() {
    var savingInput = document.getElementById('save-input');
    const savingPercentage = parseFloat(savingInput.value);
    if (savingInput.value == "") {
        console.log(alert('please, enter your Saving percentage'));
    }
    else if ((isNaN(savingPercentage) == true || savingPercentage < 0) && savingInput.value != "") {
        console.log(alert('Your saving percentage is Invalid.Please, enter a valid number.'))
    }
    else if ((isNaN(savingPercentage) != true || savingPercentage > 0) && savingInput.value != "") {
        var savingAmount = parseFloat((document.getElementById('income-input').value * savingPercentage) / 100);
        document.getElementById('saving-amount').innerText = savingAmount;
        document.getElementById('remaining-balance2').innerText = getBalance('-input') - savingAmount;
    }
};
// using addEventListener on calculate button
document.getElementById('calculate-btn').addEventListener('click', function () {
    var afterExpenseBalance = getBalance('-input');
});
// using addEventListener on save button
document.getElementById('save-btn').addEventListener('click', function () {
    var remainingBalance = getRemainingBalance();
});
