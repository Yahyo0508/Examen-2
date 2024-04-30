import React, { useEffect, useState } from "react";
import { MdOutlineStar, MdLocalOffer } from "react-icons/md";

const truncateDescription = (description, maxLength) =>
  description.length > maxLength
    ? `${description.substring(0, maxLength - 3)}...`
    : description;

const Products = ({ filterByRating }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch("https://dummyjson.com/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        return response.json();
      })
      .then((data) => {
        if (filterByRating) {
          const filteredProducts = data.products.filter(
            (product) => product.rating >= 4.8
          );
          setProducts(filteredProducts);
        } else {
          setProducts(data.products);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, [filterByRating]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container mx-auto bg-slate-700">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products && products.length > 0 ? (
          products.map((product, id) => (
            <div
              key={id}
              className="bg-gray-300 p-3 text-center rounded-xl overflow-hidden shadow-lg  container mx-auto max-w-[90%] my-8"
            >
              <img
                src={product.thumbnail}
                alt=""
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {product.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  {truncateDescription(product.description, 72)}
                </p>
                <div className="flex items-center mb-2">
                  <p className="text-sm text-gray-800 mr-1">
                    Rating: {product.rating}
                  </p>
                  <MdOutlineStar color="#FFA500" size="20" />
                </div>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <MdLocalOffer className="text-red-500 mr-1" />
                    <p className="text-sm text-red-500 font-semibold">
                      {product.discountPercentage}% Off
                    </p>
                  </div>
                  <p className="text-sm text-gray-600">
                    In-stock:{" "}
                    <span className="font-semibold">{product.stock}</span>
                  </p>
                </div>
                <p className="text-lg font-semibold text-gray-800">
                  Price:{" "}
                  <span className="text-green-600">${product.price}</span>
                </p>
                <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
                  Buy Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Products;
