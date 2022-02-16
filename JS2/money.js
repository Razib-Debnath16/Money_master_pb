function getBalance(product) {
    var incomeInput = document.getElementById('income' + product);
    const income = parseInt(incomeInput.value);
    var foodInput = document.getElementById('food' + product);
    const foodCost = parseInt(foodInput.innerText);
    var rentInput = document.getElementById('rent' + product);
    const rentCost = parseInt(rentInput.innerText);
    var clothInput = document.getElementById('cloth' + product);
    const clothCost = parseInt(clothInput.innerText);

}
document.getElementById('calculate-btn').addEventListener('click', function () {
    var RemainingBalance = getBalance('-input');
});
