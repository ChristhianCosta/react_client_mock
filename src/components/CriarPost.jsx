import { FormContainer, FormWrapper } from "./postagem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const CriarPost = () => {
  const navigation = useNavigate()

  const [file, setFile] = useState('')

  function handleImage(e){
    console.log(e.target.files)
    setFile(e.target.files[0])
  }

  function handlePost(e){
    const data = new FormData()
    
    data.append('title', title.value)
    data.append('category', category.value)
    data.append('content', content.value)

    data.append('file', file)
    
    console.log(data)
    axios.post("http://localhost:3000/post/criarmulti", data).then((res) => {
        //navigation('/')
        console.log(res)
    });
  }

  function onSubmit(data) {
    axios.post("http://localhost:3000/post/criarmulti", data).then((response) => {
        //navigation('/')
        console.log(data)
    });
  };

  return (
    <FormContainer>
      <div>
          <form action="POST" encType="multipart/form-data" >
              <label htmlFor="title">Título: </label>
              <input type="text" name="title" id="title" /> <br />

              <label htmlFor="category">Categoria: </label>
              <input type="text" name="category" id="category" />

              <label htmlFor="content">Conteúdo </label>
              <textarea name="content" id="content" cols="30" rows="10">

              </textarea>

              <label htmlFor="file">Imagem: </label>
              <input type="file" name="file" id="file" onChange={handleImage} />
              <br />
          </form>

          <button type="submit" onClick={handlePost}> Create Post</button>
      </div>
    </FormContainer>
  )
}
