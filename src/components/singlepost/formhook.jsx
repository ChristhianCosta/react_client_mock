import { useFormik } from "formik";
import * as Yup from 'yup'
import { StyledLogin } from "./loginForm";
import React, { useState } from 'react';

import { axiosPrivate } from "../../api/axios";




export default function TestForm() {

  const [user, setUser] = useState();

  const onSubmit = async (values) => {
    axiosPrivate.post("/user/login", {'email':values.email,'password':values.password}).then((res) => {
      //navigation('/')
      
      if(res.data.error) {
        alert(res.data.error)
      }else{
        
        setUser(res.data.logado)
        
      }

      
    });
  };


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
      <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
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

      

      <span>
        <p>
        {user? "bemvindo " + user : ""}
        </p>
      </span>
    </main>
  );
}