import styled from "styled-components";

//confiurações compartilhadas


export const FormContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 20px;


    margin: 1rem 0;
    background-color: black;


  > div{
    
    width: 40vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .formContainer{
    width: 90%;
    padding: 0.2rem;
    border-radius: 20px;
    
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    > div {
      background: none;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      
      > * {
        background: none;
        padding: 20px;
      }
      
      > #content{
        width: 400px;
        height: 300px;
      }
    }

    > #contentDiv{
      flex-direction: column;
    }
    > button {
      width: 30%;
      background-color: #F6EB37;
    }
  }
`

export const FormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
`

export const PostForm = styled.form`      
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

export const StyledInput = styled.input`
  display: block;
  width: 100%;

  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

export const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 100%;
  min-height: 100px;
  resize: none;

  background-color: #eee;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;
export const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: #fff;
  font-size: 0.9rem;
  border: 0;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

export const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;

  legend {
    padding: 0 10px;
  }

  label {
    padding-right: 20px;
  }

  input {
    margin-right: 10px;
  }
`;