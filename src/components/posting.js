import styled from "styled-components"

export const StyledDiv = styled.div`
  width: 100vw;
  background: black;
  display: flex;
  justify-content: center;
`

export const PostWrapper = styled.section`
  display: grid;
  grid-template-columns: 200px 200px 200px;
  //grid-template-rows: 200px 200px;
  grid-gap: 30px 120px;

  background-color: black;
  justify-items: center;
`

export const PostCard = styled.div`
  width: 300px;
  //height: 100px;
  background-color: #343434;
  border-radius: 30px 20px;
  

  

  >*{
    //background-color: black;
    color: black;
    padding: 10px;
  }



  >h2{
    color: #F6EB37;
    text-align: center;
    font-family: Roboto;
  }

`

export const PostData = styled.div`
    background-color: none;
    color: black;

    >p{
        background-color: white;
        color: black;
    }
`