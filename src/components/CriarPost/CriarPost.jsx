import { FormContainer, StyledButton } from "./postagem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


export const CriarPost = () => {
  const [edit, setEdit] = useState('');

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
    data.append('content', edit)

    data.append('file', file)
    
    console.log(data)
    axios.post("http://localhost:3000/user/login", data).then((res) => {
        //navigation('/')
        console.log(res)
    });
  }

  return (
    <FormContainer style={{background: 'white'}}>
      <div>
          <form action="POST" encType="multipart/form-data" >
              <div className="info">
                <label htmlFor="title">Título: </label>
                <input type="text" name="title" id="title" />

                <label htmlFor="category">Categoria: </label>
                <input type="text" name="category" id="category" />
              </div>

              <div>
                <label htmlFor="content">Conteúdo </label>                
                <ReactQuill theme="snow" value={edit} onChange={setEdit} className="editor" />
              </div>

              <div className="image" >
                <label htmlFor="file">Imagem: </label>
                <input type="file" name="file" id="file" onChange={handleImage} />
              </div>
              
          </form>

          <StyledButton type="submit" onClick={handlePost}>Create Post</StyledButton>
         
      </div>
    </FormContainer>
  )
}
