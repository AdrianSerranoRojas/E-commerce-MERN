import React, { useContext } from "react";

import { ProductsContext } from "../../context/ProductsContext";
import ItemCard from "../ItemCard";

function ProductsListing() {
  const { products } = useContext(ProductsContext);
  console.log(products);

  // useEffect(() => {
  //   console.log(products);
  // }, [products])
  return (
    <section className="row">
      {products && products.map((product) => (
        <ItemCard
          key={product._id}
          id={product._id}
          img={product.img}
          title={product.title}
          shortDescription={product.shortDescription}
          upVotes={product.votes.upVotes}
          downVotes={product.votes.downVotes}
          isFavorite={product.isFavorite}
        />
      ))}
    </section>
  );
}

export default ProductsListing;
