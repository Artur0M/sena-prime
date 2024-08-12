import cienciaFiccion from "../json/ciencia-ficcion.json";
import {TituloContainer, ListaPeliculas, Card} from "./Home";
import { BannerContainer } from "../components/Banner";

const Ficcion = () => {
  return (<div>
    <BannerContainer>
        <img src="https://preview.redd.it/contsthf3ic71.png?width=1500&format=png&auto=webp&s=720c1cb5b3ff208750c1d2bfa1d5fbe8c5b71560" alt="Banner Ciencia ficcion" />
    </BannerContainer>
    <TituloContainer>
        <h2>Ciencia Ficción</h2>
    </TituloContainer>
    <ListaPeliculas>
        {
            cienciaFiccion.map(ficcion => <Card key={ficcion.id}>
                <a href={ficcion.video}>
                    <img src={ficcion.portada} alt={ficcion.titulo} />
                </a>
                <h5 title={ficcion.titulo}>{ficcion.titulo}</h5>
            </Card>)
        }
    </ListaPeliculas>
    
    </div>)
}

export default Ficcion