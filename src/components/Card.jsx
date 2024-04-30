import React from "react";

const Card = () => {
  return (
      <div
        key={id}
        className="bg-white rounded-lg overflow-hidden shadow-lg  container mx-auto max-w-[90%] "
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
            <p className="text-sm text-gray-800 mr-2">
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
              In-stock: <span className="font-semibold">{product.stock}</span>
            </p>
          </div>
          <p className="text-lg font-semibold text-gray-800">
            Price: <span className="text-green-600">${product.price}</span>
          </p>
          <button className="mt-4 bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
            Buy Now
          </button>
        </div>
      </div>
  );
};

export default Card;
