// Tiny sample module so agents have real code to change.
function subtotal(items) {
  return items.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function applyDiscount(amount, percent) {
  if (percent < 0 || percent > 100) throw new RangeError('percent must be 0-100');
  return Math.round(amount * (100 - percent)) / 100;
}

module.exports = { subtotal, applyDiscount };
