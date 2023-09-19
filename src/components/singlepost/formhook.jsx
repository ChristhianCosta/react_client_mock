import { Formik, Field, ErrorMessage, Form, useFormik } from "formik";
import * as Yup from 'yup'
import { StyledLogin } from "./loginForm";
import React, { useState } from 'react';


const onSubmit = async (values, actions) => {
  const data = new FormData()
  console.log("onsubmit")
  console.log(values.email)
  data.append('email', values.email)
  data.append('password', values.password)
  

  for (var key of data.entries()) {
    console.log(key[0] + ', ' + key[1])
  }
};

export default function TestForm() {

  const LoginSchema = Yup.object().shape({
    email:Yup.string().email('digite um email válido').required('Esse campo é requerido').min(6, 'digite um email válido').max(24, 'Email muito longo'),
    password:Yup.string().required('Esse campo é requerido').min(6, 'Senha muito curta').required('Esse campo é requerido'),
  })
  
  
  const initalValues={
    email:"",
    password:""
  } 

  const formik = useFormik({
    initialValues:initalValues,
    validationSchema:LoginSchema,
    onSubmit,
  })

  return (
    <main style={{background:'#fff'}}>
      <form onSubmit={formik.handleSubmit}>
        <StyledLogin>
          <label htmlFor="email">email </label>
          <input id="email" label="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                type={"email"}
                onBlur={formik.handleBlur}
               />
          
          {formik.errors.email && formik.touched.email && <p className="error">{formik.errors.email}</p>}
        
        </StyledLogin>
        <StyledLogin>
          <label htmlFor="password">password </label>
          <input id="password" label="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                type={"password"}
                onBlur={formik.handleBlur}
               />
        
        {formik.errors.password && formik.touched.password && <p className="error">{formik.errors.password}</p>}
        </StyledLogin>
        
        <button type={"submit"}>
            Submit
          </button>
        
      </form>
    </main>
  );
}