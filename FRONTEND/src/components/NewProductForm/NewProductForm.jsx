import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

import Input from "../Input";
import Button from "../Button copy/ButtonF";

import productSchema from "./product-schema";


function addProductDetails(product) {
  return {
    id: uuid(),
    ...product,
    quantity: 0,
    isFavorite: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    votes: {
      upVotes: {
        upperLimit: 10,
        currentValue: 0,
      },
      downVotes: {
        lowerLimit: 10,
        currentValue: 0,
      },
    },
    // author: {
    //   id: uuid(),
    //   ...product.author,
    // },
  };
}



function NewProductForm({saveNewProduct}) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  

  const formik = useFormik({
    initialValues: {
      title: "",
      price: 0,
      img: "",
      shortDescription: "",
      longDescription: "",
      unitsInStock: 0,
    },
    validationSchema: productSchema,
    onSubmit: (values, { setSubmitting }) => {
      const newProduct = addProductDetails(values);
      saveNewProduct(newProduct);
      setSubmitting(true);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Input
          type="text"
          label="Product title"
          id="title"
          value={formik.values.title}
          placeholder="Product title"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.title}
          errorMessage={formik.errors.title}
        />
        <Input
          type="number"
          label="Product price"
          id="price"
          value={formik.values.price}
          placeholder="Product price"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.price}
          errorMessage={formik.errors.price}
        />
        <Input
          type="text"
          label="Product image url"
          id="img"
          value={formik.values.img}
          placeholder="Product image url"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.img}
          errorMessage={formik.errors.img}
        />
        <Input
          type="text"
          label="Short description"
          id="shortDescription"
          value={formik.values.shortDescription}
          placeholder="Short description"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.shortDescription}
          errorMessage={formik.errors.shortDescription}
        />
        <Input
          type="text"
          label="Long description"
          id="longDescription"
          value={formik.values.longDescription}
          placeholder="Long description"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.longDescription}
          errorMessage={formik.errors.longDescription}
        />
        <Input
          type="number"
          label="Units in stock"
          id="unitsInStock"
          value={formik.values.unitsInStock}
          placeholder="Units in stock"
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          hasErrorMessage={formik.touched.unitsInStock}
          errorMessage={formik.errors.unitsInStock}
        />
        <Button
          submitButton
          block
          disabled={formik.isValidating || !formik.isValid}
        >
          {formik.isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>

      {hasSubmitted && <Redirect to="/Home" />}
    </>
  );
}

export default NewProductForm;
