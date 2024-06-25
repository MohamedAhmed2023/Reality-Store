import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import "./ProductCard.css";
const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };

  return (
    <>
      <div className="card-container">
        <Link className="ProductCard" to={`/product/${product._id}`}>
          <img
            src={product.images[0].url}
            alt={product.name}
            className="ProductImg"
          />
          <div className="card-content">
            <p className="productName">{product.name}</p>
            <div className="Rating">
              <Rating {...options} />
              <span className="Reviews">({product.numOfReviews} Reviews)</span>
            </div>
            <div>
              <div className="offerPriceBox">
                <span className="p__Price">{`$${product.price}`}</span>
                <p className="disc">
                  {" "}
                  {product.offerPrice > 0 ? `${product.offerPrice}%` : ""}
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
