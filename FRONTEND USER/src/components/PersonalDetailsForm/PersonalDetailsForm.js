import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

import Input from "../Input";
import Button from "../Button";

import checkoutSchema from "./checkout-schema";

import { CheckoutsContext } from "../../context/CheckoutsContext";

function AddCheckoutDetails(checkout) {
  return {
    id: uuid(),
    ...checkout,
  };
}

function PersonalDetailsForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { checkouts, saveCheckoutTemp1 } = useContext(CheckoutsContext);

  const formik = useFormik({
    initialValues: {
      name: checkouts.step1.name ? checkouts.step1.name : "",
      email: checkouts.step1.email ? checkouts.step1.email : "",
      phone: checkouts.step1.phone ? checkouts.step1.phone : "",
    },
    validationSchema: checkoutSchema,
    onSubmit: (values, { setSubmitting }) => {
      const newCheckout = AddCheckoutDetails(values);
      saveCheckoutTemp1(newCheckout);
      setSubmitting(true);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      <div className="col col-7">
        <form id="form1" onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            label="name"
            id="name"
            value={formik.values.name}
            placeholder="name"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.name}
            errorMessage={formik.errors.name}
          />
          <Input
            type="email"
            label="email"
            id="email"
            value={formik.values.email}
            placeholder="email"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.email}
            errorMessage={formik.errors.email}
          />
          <Input
            type="number"
            label="phone"
            id="phone"
            value={formik.values.phone}
            placeholder="phone"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.phone}
            errorMessage={formik.errors.phone}
          />
          <Button
            submitButton
            block
            disabled={formik.isValidating || !formik.isValid}
          >
            {formik.isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </form>
      </div>

      {hasSubmitted && <Redirect to="/checkout/step-2" />}
    </>
  );
}
export default PersonalDetailsForm;
