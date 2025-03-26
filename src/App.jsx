import { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setShowMessage(true);
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => setShowMessage(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* ✅ Aviso flotante */}
      {showMessage && (
        <div className="fixed top-4 right-4 bg-green-600 text-white px-4 py-2 rounded shadow z-50 animate-pulse">
          ¡Producto añadido al carrito!
        </div>
      )}

      <Header cartCount={cartItems.length} />
      <ProductGrid addToCart={addToCart} />

      {/* ✅ Mostrar carrito */}
      {cartItems.length > 0 && (
        <section className="p-4 border-t mt-4 bg-gray-50">
          <h2 className="text-xl font-bold mb-2">🛍️ Carrito:</h2>
          <ul className="space-y-2">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-2 rounded shadow"
              >
                <span>{item.name}</span>
                <span className="text-gray-500">{item.price}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Footer />
    </div>
  );
}

export default App;
