import ImageGallery from "react-image-gallery";
import "../assets/css/galery.scss";
import { redirect } from "react-router-dom";


const Gallery = () => {

  const images = [
    {
      original: "https://hips.hearstapps.com/vidthumb/images/all-quiet-on-the-western-front-official-teaser-1662469930.jpg?crop=0.760xw:0.925xh;0.0897xw,0.0754xh&resize=1200:*",
      thumbnail: "https://es.web.img3.acsta.net/pictures/22/10/04/15/28/0809302.jpg",
  

    },
    {
      original: "https://preview.redd.it/contsthf3ic71.png?width=1500&format=png&auto=webp&s=720c1cb5b3ff208750c1d2bfa1d5fbe8c5b71560",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUmcpvWR6DT4tEXUJdcorRH3TI-S6kekFFPQ&s",
    },
    {
      original: "https://cdn.superaficionados.com/imagenes/12-peliculas-de-accion-fast-x.jpg",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRYtm91oTBNNT1nkeFwz4MSitLsigT3RCFGsmvE,1oX8f7UsVN-WzNUihFw7ZcmLg216k&usqp=CAU",
    },
    {
      original: "https://m.media-amazon.com/images/S/aplus-media-library-service-media/366b43aa-a099-4312-98fb-4e5effaaed61.__CR0,0,970,300_PT0_SX970_V1___.jpg",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRYtm91oTBNNT1nkeFwz4MSitLsigT3RCFGsmvE1oX8f7UsVN-WzNUihFw7ZcmLg216k&usqp=CAU",
    },
    {
      original: "https://img.youtube.com/vi/HTLPULt0eJ4/maxresdefault.jpg",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqRYtm91oTBNNT1nkeFwz4MSitLsigT3RCFGsmvE1oX8f7UsVN-WzNUihFw7ZcmLg216k&usqp=CAU",
    }
  ];

  return (
    <ImageGallery 
      items={images} 
      autoPlay={true}
      showThumbnails={false}
      showNav={false}
      showFullscreenButton={false}
      showPlayButton={false}
      thumbnailPosition="bottom"
      slideInterval={3000}
      slideDuration={1000}
    />
  )
}

export default Gallery