import {BannerContainer} from "../components/Banner";
import animadas from "../json/animadas.json";
import {TituloContainer, ListaPeliculas, Card} from "./Home";

const Animadas = () => {
  return (<div>
    <BannerContainer>
        <img src="https://m.media-amazon.com/images/S/aplus-media-library-service-media/366b43aa-a099-4312-98fb-4e5effaaed61.__CR0,0,970,300_PT0_SX970_V1___.jpg" alt="banner de peliculas animadas" />
    </BannerContainer>
    <TituloContainer>
        <h2>Animadas</h2>
    </TituloContainer>
    <ListaPeliculas>
        {
            animadas.map(animada => <Card key={animada.id}>
                <a href={animada.video}>
                    <img src={animada.portada} alt={animada.titulo} />
                </a>
                <h5 title={animada.titulo}>{animada.titulo}</h5>
            </Card>)
        }
    </ListaPeliculas>
    
    </div>)
}

export default Animadas