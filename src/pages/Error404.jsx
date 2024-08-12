import styled from "styled-components"

const Page404 = styled.div`
    display: grid;
    text-align: center;
    color: white;
    box-sizing: border-box;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
`
const ErrorContainer = styled.div`
    grid-area: 1/1/1/1;
    padding-top: 25vh;

    h1{
        font-size: 50px;
        z-index: 2;
    }

    p{

    }
`

const Travolta = styled.div`
    grid-area: 1/1/1/1;
    z-index: -1;
    width: 100%;
    height: 85vh;
    opacity: 0.3;
    background: url('https://assets-9gag-fun.9cache.com/s/fab0aa49/033037194a549b0bf83e2ac4ba90706a52a9132e/static/dist/web6/img/404/bg.gif') center center no-repeat;
    background-size: cover;
`

const Error404 = () => {
  return (
    <Page404>
        <ErrorContainer>
            <h1>404</h1>
            <p>No hay nada aqui</p>
        </ErrorContainer>
        <Travolta class="travolta"></Travolta>
    </Page404>
  )
}

export default Error404