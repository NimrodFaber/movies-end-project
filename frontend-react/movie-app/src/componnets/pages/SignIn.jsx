import Joi from "joi";
// import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import formikValidateUsingJoi from "../utils/formikvalidate";
import { useFormik } from "formik";
import PageHeader from "../coomon/PageHeader";

import Input from "../coomon/Input";
// import { useAuth } from "../context/auth.context";
function SignIn({ redirect }) {
  const [error, setError] = useState("");
  //   const { user, login } = useAuth();
  //   const navigate = useNavigate();
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
    validate: formikValidateUsingJoi({
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } }),
      password: Joi.string().min(6).max(1024).required(),
    }),
    async onsubmit(values) {},
  });
  return (
    <>
      <PageHeader
        title="Sign In"
        description="Sign in to your account! NOW!!"
      ></PageHeader>
      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="email"
          label="Email"
          {...form.getFieldProps("email")}
          error={form.touched.email && form.errors.email}
        />
        <Input
          type="password"
          label="password"
          {...form.getFieldProps("password")}
          error={form.touched.password && form.errors.password}
        />
        <div className="my-2">
          <button disabled={!form.isValid} className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
    </>
  );
}

export default SignIn;

//         <div className="my-2">
//           <button disabled={!form.isValid} className="btn btn-primary">
//             Sign In
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default SignIn;

// const SignIn = ({ redirect }) => {
//   const [error, setError] = useState("");
//   const { user, login } = useAuth();
//   const navigate = useNavigate();

//   const form = useFormik({
//     validateOnMount: true,
//     initialValues: {
//       email: "",
//       password: "",
//     },
//     validate: formikValidateUsingJoi({
//       email: Joi.string()
//         .min(6)
//         .max(255)
//         .required()
//         .email({ tlds: { allow: false } }),
//       password: Joi.string().min(6).max(1024).required(),
//     }),
//     async onSubmit(values) {
//       try {
//         await login(values);

//         if (redirect) {
//           navigate(redirect);
//         }
//       } catch ({ response }) {
//         if (response.status === 400) {
//           setError(response.data);
//         }
//       }
//     },
//   });

//   if (user) {
//     return <Navigate to="/" />;
//   }
//   return (
//     <>
//       <PageHeader
//         title="Sign In"
//         description="Sign in to your account! NOW!!"
//       />

//       <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
//         {error && <div className="alert alert-danger">{error}</div>}

//         <Input
//           type="email"
//           label="Email"
//           {...form.getFieldProps("email")}
//           error={form.touched.email && form.errors.email}
//         />
//         <Input
//           type="password"
//           label="Password"
//           {...form.getFieldProps("password")}
//           error={form.touched.password && form.errors.password}
//         />
