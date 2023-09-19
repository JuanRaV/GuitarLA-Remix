import { useLoaderData } from "@remix-run/react"
import { getPosts } from "../../.cache/models/post.server"
import ListadoPosts from "../components/listadoPosts"

export function meta(){
  return [
    {
      title:'GuitarLA - Blog',
      description:'GuitarLA-Blog de musica y venta de guitarras'
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
      <ListadoPosts
        posts={posts}
      />
  )
}

export default Blog
