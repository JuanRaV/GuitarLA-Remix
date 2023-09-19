import Guitarra from '../components/guitarra'

const ListadoGuitarras = ({guitarras}) => {
  return (
    <>
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
        
    </>

  )
}

export default ListadoGuitarras
