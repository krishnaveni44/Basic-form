import React, { useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";

export default function BasicForm() {
  const Input = ({ field, form, ...props }) => <input {...field} {...props} />;

  return (
    <div>
      <h6>BasicForm</h6>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          } 
           if (!values.password) {
            errors.password = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <lable htmlFor="email">Email</lable>
              <Field type="email" name="email" />
              <ErrorMessage name="email" />
            </div>
            <div>
              <lable htmlFor="password">Password</lable>
              <Field name="password" type="password" component={Input} />
              <ErrorMessage name="password" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
}
