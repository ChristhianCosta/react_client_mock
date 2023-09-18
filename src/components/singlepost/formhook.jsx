import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { StyledLogin } from "./loginForm";


/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const LoginSchema = Yup.object().shape({
  email:Yup.string().email('Houve um error').min(6, 'digite um email válido').max(24, 'Email muito longo').required('Esse campo é requerido'),
  password:Yup.string().min(6, 'digite um email válido').max(24, 'Email muito longo').required('Esse campo é requerido'),
})


  

  

export default function TestForm() {

  function handleSubmit(){
    console.log("submit")
  }

  return (
    <main style={{background:'#fff'}}>
      <Formik initialValues={{ email: '', password: '' }}
           validationSchema={LoginSchema}
           onSubmit={handleSubmit} >
        <>
          <StyledLogin>
            <label htmlFor="email">email: </label>
            <Field type="text" name="email" id="email" ></Field>
            <label htmlFor="password">password</label>
            <Field type="password" name="password" id="password" ></Field>
          </StyledLogin>
          <button type="submit" onSubmit={handleSubmit}>submit</button>
        </>
      </Formik>
    </main>
  );
}