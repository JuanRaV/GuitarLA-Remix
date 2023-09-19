import { useLoaderData } from "@remix-run/react"
import { getPost } from "../../.cache/models/post.server"
import { formatearFecha } from "../utils/helpers"
import styles from '../styles/blog.css'

export function meta({data}){
    if(!data){
      return [
        {
          title: `GuitarLA - Entrada no encontrada`,
          descripcion: `Venta de guitarras - Blog no encontrado`
        }
      ]
    }
    return [
      {
        title: `GuitarLA - ${data.data[0].attributes.titulo}`,
        descripcion: `Venta de guitarras - ${data.data[0].attributes.titulo}`
      }
    ]
  }

export function links(){
    return[
        {
            rel:'stylesheet',
            href:styles
        }
    ]
}
export async function loader({params}){
    const {postsUrl} = params
    const post = await getPost(postsUrl)
    if(post.data.length ===0){
        throw new Response('',{
            status:404,
            statusText:'Entrada no encontrada'
        })
    }
    return post
}

const Posts = () => {
    const post = useLoaderData()
    const {titulo,imagen,contenido, publishedAt} = post.data[0].attributes
  return (
    <article className="contenedor post mt-3">
        <img className="imagen" src={imagen.data.attributes.url} alt={`Imagen blog ${titulo}`}/>
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  )
}

export default Posts
