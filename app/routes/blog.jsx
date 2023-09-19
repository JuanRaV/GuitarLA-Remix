import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../../.cache/models/post.server"
import styles from '../styles/blog.css'
import ListadoPosts from "../components/listadoPosts"

export function meta(){
  return [
    {
      title:'GuitarLA - Blog',
      description:'GuitarLA-Blog de musica y venta de guitarras'
    }
  ]
}
export function links(){
  return [
    {
      rel:'stylesheet',
      href: styles
    }
  ]
}
export async function loader(){
  const posts = await getPosts()
  return posts.data
}
const Blog = () => {
  const posts = useLoaderData()

  return (
    <main className="contenedor">
      <ListadoPosts
        posts={posts}
      />

    </main>
  )
}

export default Blog
