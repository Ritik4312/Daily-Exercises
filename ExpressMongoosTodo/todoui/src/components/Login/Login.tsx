import {
  TextField,
  Typography,
  Button,
} from "@mui/material";
import * as Yup from "yup";
import { Formik } from "formik";
import type { User } from "../../model/user";
import UserService from "../../service/userService";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const validationSchema = Yup.object({ 
        name: Yup.string()
          .required("Name is required"),
    
        password: Yup.string()
          .required("password is required")
          .min(5, "password must be at least 5 characters"),
    
        status: Yup.boolean(),
      });
      const initialValues: User = {
        name: "",
        password: "",
    }
     const handleLogin = async (values: User) => {
        console.log(values);
        await UserService.login(values).then((data) => {
          localStorage.setItem("token", data);
          if(data.role === "user"){
            navigate("/dashboard");
          }
        });
     }
      return(
       <>
             <Typography
               variant="h4"
               align="center"
               gutterBottom
             >
               Login
             </Typography>
       
             <Formik
               initialValues={initialValues}
               validationSchema={validationSchema}
               onSubmit={(values, { resetForm }) => {
                 handleLogin(values);
                 resetForm();
               }}
             >
               {({
                 values,
                 errors,
                 touched,
                 handleChange,
                 handleBlur,
                 handleSubmit,
               }) => (
                 <form onSubmit={handleSubmit}>
                   <TextField
                   
                     label="Name"
                     name="name"
                     value={values.name}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     margin="normal"
                     error={
                       touched.name &&
                       Boolean(errors.name)
                     }
                     helperText={
                       touched.name && errors.name
                     }
                   />
       
                   <TextField
                   
                     multiline
                  
                     label="Password"
                     name="password"
                     value={values.password}
                     onChange={handleChange}
                     onBlur={handleBlur}
                     margin="normal"
                     type="password"
                     error={
                       touched.password &&
                       Boolean(errors.password)
                     }
                     helperText={
                       touched.password &&
                       errors.password
                     }
                   />
       
                   <Button
                     fullWidth
                     variant="contained"
                     type="submit"
                     sx={{ mt: 2 }}
                   >
                     Login
                   </Button>
                 </form>
               )}
             </Formik>
           </>
    )
}
export default Login;
