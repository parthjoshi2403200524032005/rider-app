import React, { useState } from "react";

const Navbar = ({
  showCart,
  setShowCart,
  searchQuery,
  setSearchQuery,
  cart,
  setCart
}) => {
  const removeItemFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const [cartHeight, setCartHeight] = useState(0);

  const toggleCart = () => {
    setShowCart(!showCart);
    setCartHeight(showCart ? 0 : 300);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const decrementItemQuantity = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
    } else {
      newCart.splice(index, 1);
    }
    setCart(newCart);
  };

  return (
    <nav className="bg-gray-800 p-4 text-white relative backdrop-filter backdrop-blur-lg bg-opacity-50 fixed top-0 left-0 w-full flex justify-center items-center z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">My Shop</div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search products"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="p-2 border border-gray-300 rounded mr-4 text-black focus:outline-none focus:border-blue-500 transition-all duration-300"
          />
          <button
            onClick={toggleCart}
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition-all duration-300 relative"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
                {cart.length}
              </span>
            )}
          </button>
          {showCart && (
            <>
              <div className="absolute top-[100px] left-[550px]  justify-center items-center">
                <div className="bg-white p-8 rounded h-[500px] w-[450px]  overflow-y-auto z-[9999] ">
                  <h3 className="text-xl text-black font-semibold mb-2 mt-4">
                    Shopping Cart
                  </h3>
                  <ul className="space-y-2">
                    {cart.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-8 h-8 object-cover mr-2 rounded-full"
                        />
                        <span className="text-gray-800">{item.name}</span>
                        <span className="text-black">
                          ${item.price} x {item.quantity}
                        </span>
                        <button
                          onClick={() => decrementItemQuantity(index)}
                          className="ml-2 text-blue-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 transition-all duration-300"
                        >
                          Decrease
                        </button>
                        <button
                          onClick={() => removeItemFromCart(index)}
                          className="ml-2 text-red-500 hover:text-red-600 focus:outline-none focus:text-red-600 transition-all duration-300"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  <div className="ml-auto text-black">
                    Total: ${calculateTotal()}
                  </div>
                </div> 
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const Shopping = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "fries",
      price: 20,
      img: "https://www.bigbasket.com/media/uploads/p/m/40016990_3-mccain-french-fries.jpg?tr=w-1920,q=80"
    },
    {
      id: 2,
      name: "nuggets",
      price: 30,
      img: "https://www.bigbasket.com/media/uploads/p/m/40005418_5-yummiez-nuggets-chicken.jpg?tr=w-1920,q=80"
    },
    {
      id: 3,
      name: "green-peas",
      price: 25,
      img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80"
    },
    {
      id: 4,
      name: "fingers",
      price: 20,
      img: "https://www.bigbasket.com/media/uploads/p/m/40016992_6-mccain-veggie-fingers-veggie-delight-with-corn-carrot-peas.jpg?tr=w-1920,q=80"
    },
    {
      id: 5,
      name: "potato-bites",
      price: 30,
      img: "https://www.bigbasket.com/media/uploads/p/m/206433_8-mccain-potato-bites-chilli-garlic.jpg?tr=w-1920,q=80"
    },
    {
      id: 6,
      name: "green-peas",
      price: 25,
      img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80"
    },
    {
      id: 7,
      name: "green-peas",
      price: 100,
      img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80"
    },
    {
      id: 8,
      name: "Cheese Burger",
      price: 50,
      img: "https://www.bigbasket.com/media/uploads/p/m/40016990_3-mccain-french-fries.jpg?tr=w-1920,q=80"
    },
    {
      id: 9,
      name: "Pizza",
      price: 60,
      img: "https://www.bigbasket.com/media/uploads/p/m/40005418_5-yummiez-nuggets-chicken.jpg?tr=w-1920,q=80"
    },
    {
      id: 10,
      name: "Ice Cream",
      price: 35,
      img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80"
    },
    {
      id: 11,
      name: "Milkshake",
      price: 25,
      img: "https://www.bigbasket.com/media/uploads/p/m/40016992_6-mccain-veggie-fingers-veggie-delight-with-corn-carrot-peas.jpg?tr=w-1920,q=80"
    },
    {
      id: 12,
      name: "Salad",
      price: 40,
      img: "https://www.bigbasket.com/media/uploads/p/m/206433_8-mccain-potato-bites-chilli-garlic.jpg?tr=w-1920,q=80"
    },
    {
      id: 13,
      name: "Smoothie",
      price: 30,
      img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80"
    },
    {
      id: 14,
      name: "Sushi",
      price: 70,
      img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80"
    }
  ]);

  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      const updatedProduct = { ...product, quantity: 1 };
      setCart([...cart, updatedProduct]);
    }
  };

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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products
            .filter((product) =>
              product.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition duration-300 transform hover:scale-105"
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="text-lg font-semibold mb-2">
                    {product.name}
                  </div>
                  <div className="text-sm mb-2">{product.description}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold">${product.price}</div>
                    <button
                      onClick={() => addToCart(product)}
                      className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Shopping;

// [
//   {
//     id: 1,
//     name: "fries",
//     price: 20,
//     img: "https://www.bigbasket.com/media/uploads/p/m/40016990_3-mccain-french-fries.jpg?tr=w-1920,q=80"
//   },
//   {
//     id: 2,
//     name: "nuggets",
//     price: 30,
//     img: "https://www.bigbasket.com/media/uploads/p/m/40005418_5-yummiez-nuggets-chicken.jpg?tr=w-1920,q=80"
//   },
//   {
//     id: 3,
//     name: "green-peas",
//     price: 25,
//     img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80"
//   },
//   {
//     id: 4,
//     name: "fingers",
//     price: 20,
//     img: "https://www.bigbasket.com/media/uploads/p/m/40016992_6-mccain-veggie-fingers-veggie-delight-with-corn-carrot-peas.jpg?tr=w-1920,q=80"
//   },
//   {
//     id: 5,
//     name: "potato-bites",
//     price: 30,
//     img: "https://www.bigbasket.com/media/uploads/p/m/206433_8-mccain-potato-bites-chilli-garlic.jpg?tr=w-1920,q=80"
//   },
//   {
//     id: 6,
//     name: "green-peas",
//     price: 25,
//     img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80"
//   },
//   {
//     id: 7,
//     name: "green-peas",
//     price: 100,
//     img: "https://www.bigbasket.com/media/uploads/p/m/103692_2-safal-frozen-green-peas.jpg?tr=w-1920,q=80"
//   }
// ]
