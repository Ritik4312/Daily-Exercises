import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function UserLogin() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().required("Password is required")
    }),
    onSubmit: async (values, { setStatus }) => {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const data = await res.json();
      setStatus(data.message);
      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", "user");
        localStorage.setItem("name", data.name);
        setTimeout(() => navigate("/"), 1000);
      }
    }
  });

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow-sm p-4">
        <h3 className="text-center mb-4">User Login</h3>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input id="email" name="email" type="email" className="form-control"
            onChange={formik.handleChange} value={formik.values.email} />
          {formik.errors.email && <small className="text-danger">{formik.errors.email}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input id="password" name="password" type="password" className="form-control"
            onChange={formik.handleChange} value={formik.values.password} />
          {formik.errors.password && <small className="text-danger">{formik.errors.password}</small>}
        </div>

        {formik.status && <div className="alert alert-info py-2">{formik.status}</div>}

        <button className="btn btn-primary w-100" onClick={formik.handleSubmit}>Login</button>
        <p className="text-center mt-3 mb-0">New user? <Link to="/user/register">Register</Link></p>
      </div>
    </div>
  );
}

export default UserLogin;