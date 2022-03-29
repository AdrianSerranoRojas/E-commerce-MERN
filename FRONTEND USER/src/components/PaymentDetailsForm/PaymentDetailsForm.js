import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { useFormik } from "formik";

import Input from "../Input";
import Button from "../Button";

import checkoutSchema3 from "./checkout-schema-3";

import { CheckoutsContext } from "../../context/CheckoutsContext";

function BillingAddressForm(checkout) {
  return {
    id: uuid(),
    ...checkout,
  };
}

function PersonalDetailsForm() {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const { checkouts, saveCheckoutTemp3 } = useContext(CheckoutsContext);

  const formik = useFormik({
    initialValues: {
      paymentMethod: checkouts.step3.paymentMethod
        ? checkouts.step3.paymentMethod
        : "",
      cardHolderName: checkouts.step3.cardHolderName
        ? checkouts.step3.cardHolderName
        : "",
      cardNumber: checkouts.step3.cardNumber ? checkouts.step3.cardNumber : "",
      cardExpiryDate: checkouts.step3.cardExpiryDate
        ? checkouts.step3.cardExpiryDate
        : "",
      cardCVVCode: checkouts.step3.cardCVVCode
        ? checkouts.step3.cardCVVCode
        : "",
      consentCheckbox: checkouts.step3.consentCheckbox
        ? checkouts.step3.consentCheckbox
        : "",
    },
    validationSchema: checkoutSchema3,
    onSubmit: (values, { setSubmitting }) => {
      const newCheckout = BillingAddressForm(values);
      saveCheckoutTemp3(newCheckout);
      setSubmitting(true);
      setTimeout(() => {
        setHasSubmitted(true);
      }, 500);
    },
  });

  return (
    <>
      {/* <div className="container"> */}
      <div className="col col-7">
        <form onSubmit={formik.handleSubmit}>
          <Input
            type="text"
            label="paymentMethod"
            id="paymentMethod"
            value={formik.values.paymentMethod}
            placeholder="paymentMethod"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.paymentMethod}
            errorMessage={formik.errors.paymentMethod}
          />
          <Input
            type="text"
            label="cardHolderName"
            id="cardHolderName"
            value={formik.values.cardHolderName}
            placeholder="cardHolderName"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.cardHolderName}
            errorMessage={formik.errors.cardHolderName}
          />
          <Input
            type="number"
            label="cardNumber"
            id="cardNumber"
            value={formik.values.cardNumber}
            placeholder="cardNumber"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.cardNumber}
            errorMessage={formik.errors.cardNumber}
          />
          <Input
            type="text"
            label="cardExpiryDate"
            id="cardExpiryDate"
            value={formik.values.cardExpiryDate}
            placeholder="cardExpiryDate"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.cardExpiryDate}
            errorMessage={formik.errors.cardExpiryDate}
          />
          <Input
            type="number"
            label="cardCVVCode"
            id="cardCVVCode"
            value={formik.values.cardCVVCode}
            placeholder="cardCVVCode"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.cardCVVCode}
            errorMessage={formik.errors.cardCVVCode}
          />
          <Input
            type="text"
            label="consentCheckbox"
            id="consentCheckbox"
            value={formik.values.consentCheckbox}
            placeholder="consentCheckbox"
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            hasErrorMessage={formik.touched.consentCheckbox}
            errorMessage={formik.errors.consentCheckbox}
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
      {/* </div> */}
      {hasSubmitted && <Redirect to="/checkout/step-3" />}
    </>
  );
}
export default PersonalDetailsForm;
