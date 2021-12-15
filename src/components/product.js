import { useState } from "react";
function Product({ id, title, price, description, category, image }) {
  return (
    <div>
      <p>{category}</p>
      <img
        loading="lazy"
        src={image}
        width={200}
        height={150}
        alt="This is a banner image"
      />
      <h1>{title}</h1>
    </div>
  );
}
export default Product;
