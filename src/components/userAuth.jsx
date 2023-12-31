import { FormContainer, StyledButton } from "./CriarPost/postagem";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
import { axiosPrivate } from "../api/axios";


export const Auth = () => {
  const [edit, setEdit] = useState('');

  const navigation = useNavigate()

  function handleLogin(e){
    const data = new FormData()
    
    data.append('email', email.value)
    data.append('password', password.value)
    data.append("test", "test string")
    
    axiosPrivate.get("http://localhost:3000/user/auth",{withCredentials:true}).then((res) => {
        //navigation('/')
        console.log(res)
    });
  }

  return (
    <FormContainer style={{background: 'white'}}>
      <div>
        <h1>Auth</h1>
          <form action="POST" encType="multipart/form-data" >
              <div className="info">
                <label htmlFor="email">Email: </label>
                <input type="text" name="email" id="email" />

                <label htmlFor="password">senha: </label>
                <input type="password" name="password" id="password" />
              </div>              
          </form>

          <StyledButton type="submit" onClick={handleLogin}>Login</StyledButton>
         
      </div>
    </FormContainer>
  )
}
