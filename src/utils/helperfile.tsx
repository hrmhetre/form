import * as Yup from "yup";
export const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone Number is required"),
  address: Yup.string().required("Address is required"),
  dateOfBirth: Yup.date()
    .required("Date of Birth is required")
    .max(new Date(), "Date of Birth cannot be in the future"),
  gender: Yup.string().required("Gender is required"),
  accountType: Yup.string().required("Account Type is required"),
  file: Yup.mixed().required("File upload is required"),
  agreeToTerms: Yup.boolean().required(""),
});
