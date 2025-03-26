const dummyProducts = [
    { id: 1, name: "Camiseta", price: "20€" },
    { id: 2, name: "Pantalones", price: "30€" },
    { id: 3, name: "Zapatillas", price: "50€" },
    { id: 4, name: "Gorra", price: "15€" },
  ];
  
  export default function ProductGrid({ addToCart }) {
    return (
      <main className="p-4 grid grid-cols-2 md:grid-cols-4 gap-4">
        {dummyProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow hover:shadow-md transition">
            <div className="aspect-square bg-gray-200 mb-2" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
            >
              Añadir al carrito
            </button>
          </div>
        ))}
      </main>
    );
  }
  