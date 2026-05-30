export const cartCalculations = (cartItems) => {
  // SUBTOTAL
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,

    0,
  );
  const itemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // SHIPPING
  const shipping = subtotal > 500 ? 0 : 99;

  // DISCOUNT
  const discount = subtotal * 0.15;

  //TAX
  const tax = subtotal * 0.1;

  // TOTAL
  const total = Math.max(subtotal + shipping + tax - discount, 0);

  return {
    subtotal,
    shipping,
    discount,
    tax,
    itemsCount,
    total,
  };
};
