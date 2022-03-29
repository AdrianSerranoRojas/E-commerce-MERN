import * as Yup from "yup";

const checkoutSchema2 = Yup.object().shape({
  address: Yup.string()
    .min(2, "The short description is too short!")
    .max(50, "The short description is too long!")
    .required("The short description is required"),
  city: Yup.string()
    .min(2, "The long description is too short!")
    .max(100, "The long description is too long!")
    .required("The long description is required"),
  zipCode: Yup.number()
    .integer("The units in stock must be an integer")
    .positive("The units in stock must be a positive number")
    .required("The units in stock is required"),
  country: Yup.string()
    .min(2, "The author first name is too short!")
    .required("The author first name is required"),
  // paymentMethod: Yup.string()
  //   .min(2, "The author last name is too short!")
  //   .required("The author last name is required"),
  // cardHolderName: Yup.string().email("Invalid email").required("Required"),
});

export default checkoutSchema2;
