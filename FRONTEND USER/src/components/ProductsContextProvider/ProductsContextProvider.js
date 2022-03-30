import React, { useEffect, useState } from "react";
import { ProductsContext } from "../../context/ProductsContext";

import * as api from "../../api"

// import loadLocalStorageItems from "../../utils/loadLocalStorageItems";

// const PRODUCTS_LOCAL_STORAGE_KEY = "react-sc-state-products";

export const ProductsProvider = ({ children }) => {
  // const productList = api.getProducts();
  // console.log(productList);
  const [products, setProducts] = useState();
  // setProducts(productList);
  // console.log("lo qqms");
  // loadLocalStorageItems(PRODUCTS_LOCAL_STORAGE_KEY, []),
  console.log(products);
  
  async function getProductsDb(){
    let prod = [];
    await api.getProducts().then((data) =>
  {
    prod = data;
    setProducts(prod);
  })
  return prod;
  };

  useEffect(() => {
    getProductsDb()
  }, []);

  function handleDownVote(productId) {
    const updatedProducts = products.map((product) => {
      if (
        product.id === productId &&
        product.votes.downVotes.currentValue <
          product.votes.downVotes.lowerLimit
      ) {
        return {
          ...product,
          votes: {
            ...product.votes,
            downVotes: {
              ...product.votes.downVotes,
              currentValue: product.votes.downVotes.currentValue + 1,
            },
          },
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  }

  function handleUpVote(productId) {
    const updatedProducts = products.map((product) => {
      if (
        product.id === productId &&
        product.votes.upVotes.currentValue < product.votes.upVotes.upperLimit
      ) {
        return {
          ...product,
          votes: {
            ...product.votes,
            upVotes: {
              ...product.votes.upVotes,
              currentValue: product.votes.upVotes.currentValue + 1,
            },
          },
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  }

  function handleSetFavorite(productId) {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          isFavorite: !product.isFavorite,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  }
  function saveNewProduct(newProduct) {
    setProducts((prevState) => [newProduct, ...prevState]);
  }
  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        handleDownVote,
        handleUpVote,
        handleSetFavorite,
        saveNewProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
