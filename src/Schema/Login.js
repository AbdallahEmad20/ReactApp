import * as yup from "yup";

const loginSchema = yup.object().shape({
email: yup.string().required(" Email field is required").email("Email must ba availd email"),
password : yup.string().required("Password field is required").min(8).max(35)
})

export default loginSchema;