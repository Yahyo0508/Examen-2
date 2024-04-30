import React, { useEffect, useState } from "react";
import { MdOutlineStar, MdLocalOffer } from "react-icons/md";
import Card from "../components/Card";

const truncateDescription = (description, maxLength) =>
  description.length > maxLength
    ? `${description.substring(0, maxLength - 3)}...`
    : description;

const Products = ({ filterByRating }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        if (filterByRating) {
          const filteredProducts = data.products.filter(
            (product) => product.rating >= 4.8
          );
          setProducts(filteredProducts);
        } else {
          setProducts(data.products);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [filterByRating]);

  return (
    <div className="container mx-auto bg-slate-700">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {products && products.length > 0 ? (
          products.map((product, id) => (
           <Card />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
