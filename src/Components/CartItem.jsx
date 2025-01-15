import React, { useEffect } from 'react';

function CartItem({ cart, setCart }) {
  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Increase quantity
  const increaseQuantity = (item) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.mal_id === item.mal_id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (item) => {
    setCart(
      cart.map((cartItem) =>
        cartItem.mal_id === item.mal_id && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  // Delete item from cart
  const deleteItem = (item) => {
    setCart(cart.filter((cartItem) => cartItem.mal_id !== item.mal_id));
  };

  return (
    <div style={{ padding: '20px', marginBottom: '7rem' }}>
      <h2>𝓒𝓪𝓻𝓽 𝓘𝓽𝓮𝓶𝓼</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div
              key={item.mal_id}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '10px',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '8px',
              }}
            >
              {/* Anime Image */}
              <img
                src={item.images.jpg.image_url}
                alt={item.title}
                style={{
                  width: '80px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '5px',
                }}
              />

              {/* Anime Title and Quantity */}
              <div style={{ flex: '1' }}>
                <h4>{item.title}</h4>
                <p>Quantity: {item.quantity}</p>
              </div>

              {/* Quantity Control Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => increaseQuantity(item)}
                  style={{
                    backgroundColor: 'rgb(11, 212, 247)',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => decreaseQuantity(item)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                >
                  -
                </button>
                <button
                  onClick={() => deleteItem(item)}
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '5px 10px',
                    cursor: 'pointer',
                    borderRadius: '4px',
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CartItem;
