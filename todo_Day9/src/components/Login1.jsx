import { Formik,Field,Form,ErrorMessage } from "formik";
import * as Yup from 'yup'; 
const validate = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().min(6, 'Too Short!').required('Required'),
});
function Login1(){
    return (
        <Formik
            initialValues = {{email:"",password:""}}
            validationSchema = {validate}
            onSubmit = {(values) => {
                console.log(values);
            }}

        >
            <Form>
                <Field name = "email" type = "email"></Field>
                <ErrorMessage name = "email" component = "div"/>
                 <Field name = "password" type = "password"></Field>
                <ErrorMessage name = "password" component = "div"/>
                <button type = "submit">Submit</button>
            </Form>
        </Formik>
    )
}
export default Login1