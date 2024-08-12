import styled from "styled-components";
import Gallery from "../components/Gallery";
import peliculas from "../json/peliculas.json";

export const TituloContainer = styled.div`
    padding: 30px 20px 0 20px;
    max-width: var(--max-width-primary);
    margin: 0 auto;
`

export const ListaPeliculas = styled.ul`
    display: grid;
    grid-template-columns: repeat(
        auto-fill, 
        minmax(150px, 1fr)
    );

    max-width: var(--max-width-primary);
    margin: 0 auto;
    padding: var(--padding-start);
    gap: 10px;
`
export const Card = styled.li`
    list-style: none;

    img{
        width: 100%;
        display: inline-block;
        aspect-ratio: 14/20;
        object-fit: cover;
        cursor: pointer;
    }

    h5{
        margin-top: 10px;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`


const Home = () => {

    return (<>
        <Gallery/>
        <TituloContainer>
            <h2>Todo</h2>
        </TituloContainer>
        <ListaPeliculas>
            {
                peliculas.map(pelicula => <Card key={pelicula.id}>
                    <a href={pelicula.video}>
                        <img src={pelicula.portada} alt={pelicula.titulo} />
                    </a>
                    <h5 title={pelicula.titulo}>{pelicula.titulo}</h5>
                    <dialog id="favDialog">
                        <form method="dialog">
                            <section>
                            <p>
                               hola
                            </p>
                            </section>
                            <menu>
                            <button id="cancel" type="reset">Cancel</button>
                            <button type="submit">Confirm</button>
                            </menu>
                        </form>
                        </dialog>
                </Card>
                
                )
            }
        </ListaPeliculas>
        
    </>)
}

export default Home