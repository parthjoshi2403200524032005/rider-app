 import React, { useState } from "react";
const Navbar = ({
  showCart,
  setShowCart,
  searchQuery,
  setSearchQuery,
  cart,
  setCart,
}) => {
  const removeItemFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">My Shop</div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 rounded mr-4 text-[black]"
          />
          <button
            onClick={() => setShowCart(!showCart)}
            className="bg-blue-500 text-white px-4 py-2 rounded-full"
          >
            Cart
          </button>
          {showCart && (
            <div className="cart-container absolute right-0 mt-4 bg-white border border-gray-300 p-4 rounded shadow-lg w-[500px] overflow-y-[0px]">
             
              <h3 className="text-xl text-[black] font-semibold mb-2 mt-[50px]">Shopping Cart</h3>
              <ul className="space-y-2">
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center "
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-8 h-8 object-cover mr-2"
                    />
                    <span className="text-gray-800"> {item.name}</span>
                    <span className="text-[black]">${item.price}</span>
                    <button
                      onClick={() => removeItemFromCart(index)}
                      className="ml-2 text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                  
                ))}
                 <button
                className="text-white text-gray-400 bg-black cursor-pointer transition duration-400 ease-in-out border-inherit border-2 border-solid pl-[10px] pr-[10px] rounded-[50px] ml-[400px]   "
                onClick={() => setShowCart(!showCart)}
              >
                Close
              </button>
              <div className="mt-4">
                <strong className="text-[black]">Total: ${calculateTotal()}</strong>
              </div>
              </ul>
              
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

const Shoping = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "fries",
      price: 20,
      img: "https://www.bigbasket.com/media/uploads/p/m/40016990_3-mccain-french-fries.jpg?tr=w-1920,q=80",
    },
    {
      id: 2,
      name: "nuggets",
      price: 30,
      img: "https://www.bigbasket.com/media/uploads/p/m/40005418_5-yummiez-nuggets-chicken.jpg?tr=w-1920,q=80",
    },
    {
      id: 3,
      name: "green-peas",
      price: 25,
      img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80",
    },
    {
      id: 4,
      name: "fingers",
      price: 20,
      img: "https://www.bigbasket.com/media/uploads/p/m/40016992_6-mccain-veggie-fingers-veggie-delight-with-corn-carrot-peas.jpg?tr=w-1920,q=80",
    },
    {
      id: 5,
      name: "potato-bites",
      price: 30,
      img: "https://www.bigbasket.com/media/uploads/p/m/206433_8-mccain-potato-bites-chilli-garlic.jpg?tr=w-1920,q=80",
    },
    {
      id: 6,
      name: "green-peas",
      price: 25,
      img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80",
    },
    { id: 7, name: "green-peas", price: 100, img: "" },
  ]);

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen">
      <Navbar
        showCart={showCart}
        setShowCart={setShowCart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cart={cart}
        setCart={setCart}
      />
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4">Shopping Page</h2>

        <div className="grid grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-200 p-4 rounded-lg">
              <img
                src={product.img}
                alt={product.name}
                className="w-24 h-24 object-cover mb-2"
              />
              <div className="text-sm">{product.name}</div>
              <div className="text-lg font-bold">${product.price}</div>
              <button
                onClick={() => addToCart(product)}
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shoping;
