// import axios from "axios";
// import { useContext } from "react";
// import { ProductsContext } from "../context/ProductsContext";

export async function getProducts() {
  const products = await fetch("http://localhost:4000/products").then(response => response.json()).then(result => result.data)
  console.log(products);

  return products;
  // const { products, setProducts } = useContext(ProductsContext)
  // console.log("carapolla");
  // await axios({
  //   method: "GET",
  //   url: "http://localhost:4000/products",
  // }).then((response) => {
  //   setProducts((response.data.data));
  //   console.log(products);
  //   return (response.data.data)
  // }).catch((error) => {
  //   console.log(error);
  // })
};
