import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import AddCard from './Components/AddCard';
import AnimePage from './Components/AnimePage';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import CartItem from './Components/CartItem';

function App() {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {

    const exists = cart.find((cartItem) => cartItem.mal_id === item.mal_id);
    
    if (exists) {
      setCart(
        cart.map((cartItem) =>
          cartItem.mal_id === item.mal_id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    alert(`${item.title} added to the cart!`);
  };
  
  return (
    <Router>
      <Navbar size={cart.length} />
      <Routes>
        <Route path="/" element={<AnimePage />} />
        <Route path="/addcard" element={<AddCard handleClick={handleClick} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/cartitem' element={<CartItem cart={cart} setCart={setCart} />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
