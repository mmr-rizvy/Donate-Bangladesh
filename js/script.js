// Section Showing & Hiding Functionality Start Here
const showSection = function (idName) {
    document.getElementById('donation-container').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');
    document.getElementById(idName).classList.remove('hidden');
}


// Donate Functionality Start Here
const donateProcess = function (amountForDonate, mainBalance, balanceInAccount) {
    const donationAmount = Number(document.getElementById(amountForDonate).value);
    console.log(donationAmount);
    let totalDonation = Number(document.getElementById(mainBalance).innerText);
    let accountBalance = Number(document.getElementById(balanceInAccount).innerText);
    if (typeof (donationAmount) === 'number' && !isNaN(donationAmount) && donationAmount > 0 && donationAmount <= accountBalance) {
        const newTotal = totalDonation += donationAmount;
        document.getElementById(mainBalance).innerText = newTotal;
        const newMainBalance = accountBalance -= donationAmount;
        document.getElementById('account-balance').innerText = newMainBalance;
        document.getElementById('my_modal_5').showModal()
        // History
        const donateFor = document.querySelector('.donate-for').innerText;
        const history = document.createElement('history');
        const dateTime = new Date();
        history.innerHTML = `<div class="p-4 border rounded-xl mb-4"><h3 class="text-lg font-bold mb-2">${donationAmount} Taka Is Donated For ${donateFor}</h3>
        <p>Date: ${dateTime}</p></div>`;
        document.getElementById('transaction-history').appendChild(history);
    } else {
        alert('Invalid Donation Amount')
    }
}
// Donate Functionality End Here

document.getElementById('btn-donate-1').addEventListener('click', function () {
    donateProcess('donation-amount-1', 'main-balance-1', 'account-balance');
})
document.getElementById('btn-donate-2').addEventListener('click', function () {
    donateProcess('donation-amount-2', 'main-balance-2', 'account-balance');
})
document.getElementById('btn-donate-3').addEventListener('click', function () {
    donateProcess('donation-amount-3', 'main-balance-3', 'account-balance');
})

// Section Showing & Hiding Functionality End Here
document.getElementById('btn-donation').addEventListener('click', function () {
    showSection('donation-container');
})
document.getElementById('btn-history').addEventListener('click', function () {
    showSection('transaction-history');
})