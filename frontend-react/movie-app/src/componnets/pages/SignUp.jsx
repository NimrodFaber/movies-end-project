import { useFormik } from "formik";
import joi from "joi";
import { useState } from "react";
import Input from "../coomon/Input";
import PageHeader from "../coomon/PageHeader";
import { formikValidateUsingJoi } from "../utils/formikvalidate";
import { createUser, loginUser } from "../../services/userService.js";
import { useNavigate, Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../context/authContext";

function Signup({ redirect }) {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [error, setError] = useState("");
  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      firstName: "",
      lastName: "",
      password: "",
      email: "",
      phone: "",
      //   favorite: "",
    },
    validate: formikValidateUsingJoi({
      firstName: joi.string().min(1).max(30).required(),
      lastName: joi.string().min(1).max(30).required(),
      email: joi
        .string()
        .email({ tlds: { allow: false } })
        .required(),
      password: joi.string().min(4).max(6000),

      phone: joi.string().required(),
      //   favorite: joi.string().min(10).max(10).required(),
    }),
    async onSubmit(values) {
      try {
        await createUser({ ...values });
        await login({ email: values.email, password: values.password });
        if (redirect) {
          navigate(redirect);
        }
      } catch ({ response }) {
        if (response.status === 400) {
          setError(response.data.details[0].message);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader
        title="Sign Up with Real App"
        description="Open a new account, it is free you yammani!"
      />
      <form noValidate autoComplete="off" onSubmit={form.handleSubmit}>
        {error && <div className="alert alert-danger">{error}</div>}

        <Input
          type="firstName"
          label="firstName"
          {...form.getFieldProps("firstName")}
          error={form.touched.firstName && form.errors.firstName}
        />
        <Input
          type="lastName"
          label="lastName"
          {...form.getFieldProps("lastName")}
          error={form.touched.lastName && form.errors.lastName}
        />
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
        <Input
          type="phone"
          label="phone"
          {...form.getFieldProps("phone")}
          error={form.touched.phone && form.errors.phone}
        />
        <div className="my-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary"
          >
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default Signup;

//   return (
//     <>
//       <PageHeader
//         title="Sign Up with Real App"
//         description="Open a new account, it is free you yammani!"
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
//         <Input
//           type="name"
//           label="Name"
//           {...form.getFieldProps("name")}
//           error={form.touched.name && form.errors.name}
//         />

//         <div className="my-2">
//           <button disabled={!form.isValid} className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default Signup;

// const Signup = ({ redirect }) => {
//   const navigate = useNavigate();
//   const { user } = useAuth();

//   const [error, setError] = useState("");

//   const form = useFormik({
//     validateOnMount: true,
//     initialValues: {
//       email: "",
//       password: "",
//       name: "",
//     },
//     validate: formikValidateUsingJoi({
//       email: Joi.string()
//         .email({ tlds: { allow: false } })
//         .required(),
//       password: Joi.string().min(6).required(),
//       name: Joi.string().min(2).required(),
//     }),
//     async onSubmit(values) {
//       try {
//         await createUser({ ...values, biz: false });
//         toast("Your account is ready 👏");

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
