
import { useState, useRef } from "react";
import "./App.css";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1500,
    description: "Premium wireless audio"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2000,
    description: "Smart fitness companion"
  }
];

function App() {
  const [cart, setCart] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [error, setError] = useState("");
  const [order, setOrder] = useState(null);

  
  const submittedRef = useRef(false);

  const formatPrice = (price) =>
    `₹${price.toLocaleString("en-IN")}`;

  // Add product
  const addToCart = (product) => {
    setError("");

    setCart((currentCart) => {
      const existing = currentCart.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  // Update quantity
  const updateQuantity = (id, change) => {
    setError("");

    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + change }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeFromCart = (id) => {
    setError("");

    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // Calculate total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Place order
  const handlePlaceOrder = () => {
    if (submittedRef.current) return;

    if (cart.length === 0) {
      setError("Your cart is empty. Please add a product.");
      return;
    }

    if (!customerName.trim()) {
      setError("Please enter your name.");
      return;
    }

    // Lock submission immediately
    submittedRef.current = true;

    const newOrder = {
      reference: "ORD-" + Date.now(),
      customerName: customerName.trim(),
      total: total
    };

    setOrder(newOrder);
    setError("");
  };

  return (
    <div className="container">

      <header className="header">
        <h1>Mini Store</h1>
        <p>Simple and secure checkout</p>
      </header>

      <div className="checkout-layout">

        {/* Products */}
        <section className="panel">
          <h2>Available Products</h2>

          {products.map((product) => (
            <div className="product" key={product.id}>
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{formatPrice(product.price)}</strong>
              </div>

              <button
                className="add-button"
                onClick={() => addToCart(product)}
                disabled={!!order}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </section>

        {/* Cart */}
        <section className="panel">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <h3>{item.name}</h3>

                <p>Price: {formatPrice(item.price)}</p>

                <div className="cart-controls">

                  <button
                    className="quantity-button"
                    aria-label="Decrease quantity"
                    disabled={!!order}
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    -
                  </button>

                  <span>Quantity: {item.quantity}</span>

                  <button
                    className="quantity-button"
                    aria-label="Increase quantity"
                    disabled={!!order}
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>

                  <button
                    className="remove-button"
                    disabled={!!order}
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>

                </div>

                <p>
                  Line Total:{" "}
                  <strong>
                    {formatPrice(item.price * item.quantity)}
                  </strong>
                </p>
              </div>
            ))
          )}

          <div className="total">
            <span>Order Total</span>
            <span>{formatPrice(total)}</span>
          </div>

          {/* Checkout form */}
          <div className="checkout-form">

            <h3>Customer Details</h3>

            <label htmlFor="customerName">
              Customer Name
            </label>

            <input
              id="customerName"
              type="text"
              placeholder="Enter your full name"
              value={customerName}
              disabled={!!order}
              onChange={(e) => {
                setCustomerName(e.target.value);
                setError("");
              }}
            />

            {error && (
              <p className="error-message" role="alert">
                {error}
              </p>
            )}

            <button
              className="place-order-button"
              onClick={handlePlaceOrder}
              disabled={!!order}
            >
              {order ? "Order Placed" : "Place Order"}
            </button>

          </div>

          {/* Order confirmation */}
          {order && (
            <div className="confirmation" role="status">
              <h3>Order Confirmed!</h3>

              <p>Thank you, {order.customerName}.</p>

              <p>
                Your order reference:
                <strong> {order.reference}</strong>
              </p>

              <p>
                Total Paid: {formatPrice(order.total)}
              </p>
            </div>
          )}

        </section>
      </div>
    </div>
  );
}

export default App;