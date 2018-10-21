/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
var cart;

function loadCart() {
  var cartItems = JSON.parse(localStorage.getItem('cartData')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableBody = table.getElementsByTagName('tbody')[0];
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableBody = table.getElementsByTagName('tbody')[0];

  // TODO: Iterate over the items in the cart
  for(var i = 0; i < cart.items.length; i++){

    // TODO: Create a TR
    var tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    // TODO: Create a TD for the delete link, quantity,  and the item
    var tableData = document.createElement('td');
    tableData.textContent = 'X';
    tableData.addEventListener('click', removeItemFromCart);
    tableData.id = cart.items[i].product.name;
    tableRow.appendChild(tableData);

    tableData = document.createElement('td');
    tableData.textContent = cart.items[i].quantity;
    tableRow.appendChild(tableData);

    tableData = document.createElement('td');
    tableData.textContent = cart.items[i].product.name;
    tableRow.appendChild(tableData);

    // TODO: Add the TR to the TBODY and each of the TD's to the TR
  }
}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(event.target.id);
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();

}



// This will initialize the page and draw the cart on screen
renderCart();
