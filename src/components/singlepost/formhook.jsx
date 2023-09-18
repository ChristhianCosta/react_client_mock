import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from 'yup'
import { useForm } from "react-hook-form";

/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const LoginSchema = Yup.object().shape({
  email:Yup.string().email('Houve um error').min(6, 'digite um email válido').max(24, 'Email muito longo').required('Esse campo é requerido'),
  password:Yup.string().min(6, 'digite um email válido').max(24, 'Email muito longo').required('Esse campo é requerido'),
})

export default function TestForm() {

  let initialValues

  return (
    <Formik >



    </Formik>
  );
}