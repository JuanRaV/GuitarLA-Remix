import {useLoaderData} from '@remix-run/react'
import { getGuitarras } from "../../.cache/models/guitarras.server"
import { getPosts } from "../../.cache/models/post.server"
import { getCurso } from '../../.cache/models/cursos.server'
import ListadoGuitarras from '../components/listadoGuitarras'
import Curso from '../components/curso'
import ListadoPosts from '../components/listadoPosts'
import stylesGuitarras from '../styles/guitarras.css'
import stylesPosts from '../styles/blog.css'
import stylesCurso from '../styles/curso.css'

export function meta(){
  return [
    {
      title:'GuitarLA - Inicio',
      description:'GuitarLA-Blog de musica y venta de guitarras'
    }
  ]
}

export function links(){
  return [
    {
      rel:'stylesheet',
      href: stylesGuitarras
    },
    {
      rel:'stylesheet',
      href: stylesPosts
    },
    {
      rel:'stylesheet',
      href: stylesCurso
    }
  ]
}
export async function loader(){
  const [guitarras,posts,curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])
  
  return {
    guitarras:guitarras.data,
    posts: posts.data,
    curso:curso.data
  }
}

const Index = () => {
  const {guitarras,posts,curso} = useLoaderData()

  return (
    <>
      <main className='contenedors'>
        <ListadoGuitarras
          guitarras={guitarras}
        />
      </main>
      <Curso
        curso={curso.attributes}
      />
      <section className='contenedor'>
        <ListadoPosts
          posts={posts}
        />
      </section>
    </>
  )
}

export default Index
