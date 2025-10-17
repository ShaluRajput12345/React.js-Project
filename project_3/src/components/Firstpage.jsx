import styled from "styled-components";

function Firstpage() {
  return (
    <Contianer>
        <div><img src="\images\dice.avif" alt="" /></div>
        <div>
            <h1>Welcome to Dice Game</h1>
            <Button>Click to Play Game</Button>
        </div>
    </Contianer>
  )
}

export default Firstpage;

const Contianer = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    h1{
        font-size: 60px;
        text-align: center;
    }
`
const Button = styled.button`
    background-color: black;
    color: white;
    min-width: 200px;
    border-radius: 8px;
    padding: 10px 20px;
    text-align: right;
`
