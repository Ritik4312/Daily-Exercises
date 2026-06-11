import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function UserRegister() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required")
    }),
    onSubmit: async (values, { setStatus }) => {
      const res = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values)
      });
      const data = await res.json();
      setStatus(data.message);
      if (res.ok) setTimeout(() => navigate("/user/login"), 1000);
    }
  });

  return (
    <div className="container mt-5" style={{ maxWidth: "450px" }}>
      <div className="card shadow-sm p-4">
        <h3 className="text-center mb-4">User Register</h3>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input id="name" name="name" className="form-control"
            onChange={formik.handleChange} value={formik.values.name} />
          {formik.errors.name && <small className="text-danger">{formik.errors.name}</small>}
        </div>

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

        <button className="btn btn-primary w-100" onClick={formik.handleSubmit}>Register</button>
        <p className="text-center mt-3 mb-0">Already have account? <Link to="/user/login">Login</Link></p>
      </div>
    </div>
  );
}

export default UserRegister;