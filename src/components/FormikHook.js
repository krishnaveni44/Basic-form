import React, { useState } from "react";
import { ErrorMessage, Field, Formik, useFormik } from "formik";

export default function FormikHook() {
  const Input = ({ field, form, ...props }) => <input {...field} {...props} />;

  const { handleSubmit, values, handleChange, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      } else if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },

    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });

  return (
    <div>
      <h6>BasicForm</h6>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit}>
        <div>
          <lable htmlFor="email">Email</lable>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {touched.email && errors.email}
        </div>
        <div>
          <lable htmlFor="password">Password</lable>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
       )}
    </div>
  );
}
