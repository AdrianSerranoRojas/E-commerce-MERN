import * as Yup from "yup";

const checkoutSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "The title is too short!")
    .max(50, "The title is too long!")
    .required("The title is required"),
  email: Yup.string().email("invalid email").required("The price is required"),
  phone: Yup.string()
    .min(2, "The title is too short!")
    .max(50, "The title is too long!")
    .required("The image url is required"),
  // address: Yup.string()
  //   .min(2, "The short description is too short!")
  //   .max(50, "The short description is too long!")
  //   .required("The short description is required"),
  // city: Yup.string()
  //   .min(2, "The long description is too short!")
  //   .max(100, "The long description is too long!")
  //   .required("The long description is required"),
  // zipCode: Yup.number()
  //   .integer("The units in stock must be an integer")
  //   .positive("The units in stock must be a positive number")
  //   .required("The units in stock is required"),
  // country: Yup.string()
  //   .min(2, "The author first name is too short!")
  //   .required("The author first name is required"),
  // paymentMethod: Yup.string()
  //   .min(2, "The author last name is too short!")
  //   .required("The author last name is required"),
  // cardHolderName: Yup.string().email("Invalid email").required("Required"),
});

export default checkoutSchema;
