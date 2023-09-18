import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "../../.cache/models/guitarras.server"
import styles from '../styles/guitarras.css'

export function meta({data}){
  return [
    {
      title: `GuitarLA - ${data.data[0].attributes.nombre}`,
      descripcion: `Venta de guitarras - ${data.data[0].attributes.nombre}`
    }
  ]
}
export function links(){
  return [
    {
      rel:'stylesheet',
      href:styles
    }
  ]
}
export async function loader({params}){
    const { guitarraUrl} = params
    const guitarra = await getGuitarra(guitarraUrl)
    return guitarra
}

const Guitarra = () => { 

  const guitarra = useLoaderData()
  const {nombre,descripcion,imagen,precio} = guitarra.data[0].attributes
  return (
    <main className="contenedor guitarra"> 
      <img className="imagen" src={imagen.data.attributes.url} alt={`Imgen de ${nombre}`} />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main> 
  )
}

export default Guitarra
