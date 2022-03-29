import * as Yup from "yup";

const checkoutSchema3 = Yup.object().shape({
  paymentMethod: Yup.string()
    .min(2, "The author last name is too short!")
    .required("The author last name is required"),
  cardHolderName: Yup.string()
    .min(2, "The author last name is too short!")
    .required("The author last name is required"),
  cardNumber: Yup.string()
    .min(2, "The author last name is too short!")
    .required("The author last name is required"),
  cardExpiryDate: Yup.string()
    .min(2, "The author last name is too short!")
    .required("The author last name is required"),
  cardCVVCode: Yup.string()
    .min(2, "The author last name is too short!")
    .required("The author last name is required"),
  consentCheckbox: Yup.string()
    .min(2, "The author last name is too short!")
    .required("The author last name is required"),
});

export default checkoutSchema3;
