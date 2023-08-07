import styled from "styled-components"

export const PostWrapper = styled.section`
    width: 100vw;
    /*display: flex;
    flex-direction: row;
    justify-content: space-between;*/

    display: grid;
    grid-template-columns: 200px 200px 200px;
    //grid-template-rows: 200px 200px;
    gap: 100px;

    padding: 20px;


    margin: 0 auto;
`

export const PostCard = styled.div`
  width: 300px;
  //height: 100px;
  background-color: whitesmoke;
  border-radius: 30px 20px;

  >*{
    background-color: none;
    color: black;
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