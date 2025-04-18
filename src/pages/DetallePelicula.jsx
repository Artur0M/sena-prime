import { useParams } from "react-router-dom";
import peliculas from "../json/peliculas.json";
import comedia from "../json/comedia.json";
import cienciaFiccion from "../json/ciencia-ficcion.json";
import animadas from "../json/animadas.json";
import ReactPlayer from "react-player/youtube";
import styled from "styled-components";
import Error404 from "./Error404";

const PeliculaContainer = styled.div`
  display: flex;
`;

const DetallePelicula = () => {
  const { id } = useParams();

  // Combina todas las películas en un solo array
  const todasLasPeliculas = [
    ...peliculas,
    ...comedia,
    ...cienciaFiccion,
    ...animadas,
  ];

  const pelicula = todasLasPeliculas.find((p) => p.id === parseInt(id));

  if (!pelicula) {
    return <Error404 />;
  }

  return (
    <>
      <div>
        <PeliculaContainer>
          <ReactPlayer
            style={{ maxHeight: "70vh" }}
            light={true}
            width="100%"
            height={600}
            url={pelicula.video}
            title={pelicula.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></ReactPlayer>
        </PeliculaContainer>
        <section
          style={{
            padding: "0 20px",
            maxWidth: "var(--max-width-primary)",
            margin: "0 auto",
          }}
        >
          <h1>{pelicula.titulo}</h1>
          <p>{pelicula.descripcion}</p>
          <i>{pelicula.año}</i>
        </section>
      </div>
    </>
  );
};

export default DetallePelicula;