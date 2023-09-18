import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../../.cache/models/guitarras.server"
import Guitarra from "../components/guitarra";

export async function loader(){
  const guitarras = await getGuitarras();
  return guitarras.data
}

const Tienda = () => {
  const guitarras =useLoaderData()

  return (
    <main className='contenedor'>
      
      <h2 className='heading'>Nuestra Colleccion</h2>
      
      {guitarras?.length && (
          <div className='guitarras-grid'>
          {guitarras.map((guitarra) => (
           <Guitarra 
            key={guitarra?.attributes.url}
            guitarra={guitarra?.attributes}
           />
          ))}
       </div>
      )}
    </main>
  )
}

export default Tienda
