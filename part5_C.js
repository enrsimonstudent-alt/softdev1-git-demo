const price = 750;
const quantity = 4;
const discount = 0.10;

const subtotal = price * quantity;
const discountAmount = subtotal * discount;
const finalAmount = subtotal - discountAmount;

console.log(finalAmount);