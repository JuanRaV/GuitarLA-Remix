import imagen from '../../public/img/nosotros.jpg'
import styles from '../styles/nosotros.css'
export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel:'preload',
      href:imagen,
      as:'image'
    }
  ]  
}
export function meta() {
  return [
    { 
      title: "GuitarLA - Nosotros",
      description:'Venta de Guitarras, blog de musica'
    }
  ];
}
const Nosotros = () => {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt="Imagen sobre Nosotros" />
        <div>
          <p>Pellentesque et luctus sapien. Phasellus at turpis sit amet libero feugiat ultricies id ac diam. Aenean sit amet nunc dui. Quisque ultricies tincidunt convallis. Sed sed bibendum ipsum. Ut sodales ex ac pulvinar dictum. Suspendisse ut lorem id justo semper placerat nec at eros. Duis ac tincidunt arcu. Maecenas at tellus id ante interdum volutpat interdum porttitor ligula. Nullam aliquam efficitur egestas. Suspendisse suscipit, est nec vehicula maximus, nibh ex congue quam, eu ullamcorper metus velit quis nulla. Nam eget metus molestie, molestie enim sed, elementum eros.</p>
          
          <p>Pellentesque et luctus sapien. Phasellus at turpis sit amet libero feugiat ultricies id ac diam. Aenean sit amet nunc dui. Quisque ultricies tincidunt convallis. Sed sed bibendum ipsum. Ut sodales ex ac pulvinar dictum. Suspendisse ut lorem id justo semper placerat nec at eros. Duis ac tincidunt arcu. Maecenas at tellus id ante interdum volutpat interdum porttitor ligula. Nullam aliquam efficitur egestas. Suspendisse suscipit, est nec vehicula maximus, nibh ex congue quam, eu ullamcorper metus velit quis nulla. Nam eget metus molestie, molestie enim sed, elementum eros.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
