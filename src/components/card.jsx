import React from "react";

function card({ product }) {
  return (
    <a className="w-1/4 h-[300px]" target="_blank" href={product.projectHref}>
      {product.project}
      <img
        className="bg-cover w-screen h-full "
        src={product.image}
        alt="img"
      />
    </a>
  );
}

export default card;
