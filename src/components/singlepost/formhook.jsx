import { Formik, Field, ErrorMessage, Form, useFormik } from "formik";
import * as Yup from 'yup'
import { StyledLogin } from "./loginForm";
import React, { useState } from 'react';


export default function TestForm() {

  const LoginSchema = Yup.object().shape({
    email:Yup.string().email('Houve um error').min(6, 'digite um email válido').max(24, 'Email muito longo').required('Esse campo é requerido'),
    password:Yup.string().min(6, 'digite um email válido').required('Esse campo é requerido'),
  })
  
  
  const initalValues={
    email:"",
    password:""
  } 

  const handleSubmit = ()=>{
    console.log("submit")
  }

  const formik = useFormik({
    initialValues:initalValues,
    validationSchema:LoginSchema,
    onSubmit: ()=>{
      console.log("submitting use formik")
    },
    handleSubmit: ()=>{
      console.log("console. log")
    }
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
                /*helperText={formik.errors.email ? formik.errors.email : ""}*/
               />
        
        </StyledLogin>
        <StyledLogin>
          <label htmlFor="password">password </label>
          <input id="password" label="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                type={"password"}
                /*helperText={formik.errors.email ? formik.errors.email : ""}*/
               />
        
        
        </StyledLogin>
        
        <button type={"submit"}>
            Submit
          </button>
        
      </form>
    </main>
  );
}