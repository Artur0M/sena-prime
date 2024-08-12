import comedia from "../json/comedia.json";
import {TituloContainer, ListaPeliculas, Card} from "./Home";
import { BannerContainer } from "../components/Banner";

const Comedia = () => {
  return (<div>
    <BannerContainer>
        <img src="https://img.youtube.com/vi/HTLPULt0eJ4/maxresdefault.jpg" alt="Banner de peliculas de comedia" />
    </BannerContainer>
    <TituloContainer>
        <h2>Comedia</h2>
    </TituloContainer>
    <ListaPeliculas>
        {
            comedia.map(comedia => <Card key={comedia.id}>
                <a href={comedia.video}>
                    <img src={comedia.portada} alt={comedia.titulo} />
                </a>
                <h5 title={comedia.titulo}>{comedia.titulo}</h5>
            </Card>)
        }
    </ListaPeliculas>
    
    </div>)
}

export default Comedia