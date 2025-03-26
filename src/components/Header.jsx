import { useEffect, useState } from "react";

export default function Header({ cartCount }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (cartCount === 0) return;
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timeout);
  }, [cartCount]);

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <h1 className="text-2xl font-bold text-gray-800">MiTienda</h1>
      <button className={`relative transition-transform duration-300 ${animate ? "scale-110" : ""}`}>
        🛒
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-2 text-xs">
          {cartCount}
        </span>
      </button>
    </header>
  );
}
