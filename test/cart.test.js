const test = require('node:test');
const assert = require('node:assert');
const { subtotal, applyDiscount } = require('../src/cart');

test('subtotal sums price x qty', () => {
  assert.strictEqual(subtotal([{ price: 2, qty: 3 }, { price: 1.5, qty: 2 }]), 9);
});

test('applyDiscount rejects bad percent', () => {
  assert.throws(() => applyDiscount(10, 120), RangeError);
});
