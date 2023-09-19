import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../../.cache/models/post.server"
import styles from '../styles/blog.css'
import Post from "../components/post"

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
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {posts.map(post=>(
          <Post
            key={post.id}
            post={post.attributes}
          />
        ))}

      </div>

    </main>
  )
}

export default Blog
