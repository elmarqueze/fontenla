import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useState, useEffect } from 'react'
import { gFetch } from '../utils/gFetch';




const ItemDetailContainer = () => {
  const [ productos, setProductos ] = useState([])
  const [ loading, setLoading ] = useState(true)

  useEffect( ()=> {
    gFetch()
    .then( resp => setProductos(resp) )
    .catch( err => console.log(err))
    .then( resp => console.log(resp))
    .finally( () => setLoading(false))
  }, [])
  
  return (
    <div>
        { loading ?
          
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>

        :       
      
        <div className="justify-content-center align-item-center d-flex flex-row flex-wrap">
              { productos.map( producto => (
                <div key={producto.id} className='card w-25 m-5'>
                  <div className='card-header'>
                    Nombre: {producto.name}
                  </div>
                  <div className='card-body'>
                    <img className='w-25' src={producto.img} />
                    <br />
                    <label>Categoria: {producto.categoria}</label><br />
                    <label>Stock: {producto.stock}</label><br />
                    <label>Precio: {producto.precio}</label>
                  </div>
                  <div className='card-footer'>
                    <button className='btn btn-outline-dark w-100'>Detalle</button>
                  </div>
                </div>
                ))
              }
          </div>
        }
    </div>
  )
}

export default ItemDetailContainer