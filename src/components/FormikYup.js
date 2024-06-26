import React, { useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";

export default function FormikYup() {
  const Input = ({ field, form, ...props }) => <input {...field} {...props} />;

const loginSchema = Yup.object().shape({
    
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    email: Yup.string().email("Invalid Email Address").required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(70, "Too Long!")
      .required("Required"),
  });

  return (
    <div>
      <h6>BasicForm</h6>
      <Formik
        initialValues={{firstName: "", email: "", password: "" }}
        validationSchema={loginSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
             <div>
              <lable htmlFor="firstname">First Name</lable>
              <Field type="firstName" name="firstName" />
              <ErrorMessage name="firstName" />
            </div>
            <div>
              <lable htmlFor="lastname">Last Name</lable>
              <Field type="lastName" name="LastName" />
              <ErrorMessage name="lastName" />
            </div>
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
