import styled from "styled-components"

export const BannerContainer = styled.div`
    max-width: var(--max-width-primary);
    margin: 0 auto;

    img{
        width: 100%;
        height: 350px;
        max-height: 60vh;
        display: inline-block;
        object-fit: cover;
        mask-image: linear-gradient( #000 80%, transparent);
    }
`

const Banner = () => {
  return (
    <BannerContainer>
    </BannerContainer>
  )
}

export default Banner