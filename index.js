document.getElementById('add-expense').addEventListener('click', function() {
    const name = document.getElementById('expense-name').value;
    const amount = parseFloat(document.getElementById('expense-amount').value);

    if (name && !isNaN(amount) && amount > 0) {
        addExpense(name, amount);
        updateTotalExpense();
    }
});

function addExpense(name, amount) {
    const expenseList = document.getElementById('expense-list');
    const expenseItem = document.createElement('li');
    expenseItem.className = 'expense-item';

    const expenseDetails = document.createElement('span');
    expenseDetails.textContent = `${name}: $${amount.toFixed(2)}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        expenseList.removeChild(expenseItem);
        updateTotalExpense();
    });

    expenseItem.appendChild(expenseDetails);
    expenseItem.appendChild(deleteButton);
    expenseList.appendChild(expenseItem);
}

function updateTotalExpense() {
    const expenseItems = document.querySelectorAll('.expense-item span');
    let total = 0;

    expenseItems.forEach(item => {
        const amount = parseFloat(item.textContent.split('$')[1]);
        total += amount;
    });

    document.getElementById('total-amount').textContent = total.toFixed(2);
}