function processPayment() {
    // Validate the form
    let form = document.querySelector('form');
    if (!form.checkValidity()) {
        // Form is not valid, display error messages
        form.reportValidity();
        return false;
    }

    // Get form data
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let deliveryAddress = document.getElementById('deliveryAddress').value;
    let paymentMethod = document.getElementById('paymentMethod').value;
    let enteredAmount = document.getElementById('enteredAmount').value;

    // Additional fields for credit/debit card payment
    let cardNumber = document.getElementById('cardNumber') ? document.getElementById('cardNumber').value : '';
    let expirationDate = document.getElementById('expirationDate') ? document.getElementById('expirationDate').value : '';
    let cvv = document.getElementById('cvv') ? document.getElementById('cvv').value : '';

    // Here, you can implement the logic to process the order
    // For example, you can send the form data to a server using fetch API

    // After processing the order, you can display a confirmation message
    alert("Order placed successfully!");

    // Optionally, you can redirect the user to a confirmation page
    // window.location.href = "confirmation.html";

    // Return false to prevent the form from submitting and page reloading
    return false;
}

function redirectToPayPal() {
    // Redirect to PayPal website
    window.location.href = "https://www.paypal.com";
}

function toggleCardDetails() {
    let cardDetails = document.getElementById("cardDetails");
    let paymentMethod = document.getElementById("paymentMethod").value;
    if (paymentMethod === "creditCard" || paymentMethod === "debitCard") {
        cardDetails.style.display = "block";
    } else {
        cardDetails.style.display = "none";
    }
}
