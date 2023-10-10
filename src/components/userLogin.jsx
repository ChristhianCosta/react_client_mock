import { FormContainer, StyledButton } from "./CriarPost/postagem";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



export const Login = () => {
  const [edit, setEdit] = useState('');

  const navigation = useNavigate()

  function handleLogin(e){
    const data = new FormData()
    
    data.append('email', email.value)
    data.append('password', password.value)
    data.append("test", "test string")
    
    axios.post("/user/login", {email:email.value, password:password.value},{withCredentials:true}).then((res) => {
        //navigation('/')
        
        console.log(res)
    });
  }

  return (
    <FormContainer style={{background: 'white'}}>
      <div>
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
