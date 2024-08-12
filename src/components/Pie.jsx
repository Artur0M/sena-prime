import styled from "styled-components"

const Footer = styled.footer`

  padding: var(--padding-start);
  width: 100%;
  box-sizing: border-box;

  p{
    text-align: right;
    font-size: .6em;
  }
`

const Pie = () => {
  return (
    <Footer>
      <p>Desarrollado por Luis Arturo Ospino</p>
    </Footer>
  )
}

export default Pie