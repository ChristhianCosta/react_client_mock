import { Formik, Form, Field } from "formik";
import { FormContainer, FormWrapper } from "./postagem";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const CriarPost = () => {
  const navigation = useNavigate()

  const initialValues = {
    title: "",
    category: "",
    content: "",
    image: "",
  };

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/post/criar", data).then((response) => {
        navigation('/')
    });
  };

  return (
    <FormContainer>
      <div>
        <Formik

          initialValues={initialValues}
          onSubmit={onSubmit}
        >
          <Form className="formContainer">

            <div>
              <label>Title: </label>
              <Field
                id="inputCreatePost"
                name="title"
                placeholder="Título"
                autoComplete="off"
              />
            </div>

            <div>
              <label>Categoria: </label>
              <Field
                id="category"
                name="category"
                placeholder="Processo seletivo, news etc"
                autoComplete="off"
              />
            </div>


            <div id="contentDiv">
              <label>Conteúdo: </label>
              <Field
                id="content"
                name="content"
                placeholder="Conteúdo do post"
                autoComplete="off"
                as="textarea"
              />
            </div>

            <div>
              <label>Imagem? </label>
              <Field
                id="image"
                name="image"
                placeholder="Trabalhando nisso"
                autoComplete="off"
              />
            </div>

            <button type="submit" > Create Post</button>
          </Form>
        </Formik>
      </div>
    </FormContainer>
  )
}
