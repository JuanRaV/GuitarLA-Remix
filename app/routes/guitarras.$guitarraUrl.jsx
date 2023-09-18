export async function loader({request,params}){
    console.log('request',request)
    console.log('params',params)
    return {}
}

const Guitarra = () => {
  return (
    <div>
      Guitarra URL
    </div>
  )
}

export default Guitarra
