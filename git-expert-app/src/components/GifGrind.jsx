import {useGifs} from '../hooks/useFetchGifs.js';
import Gifitem from './Gifitem.jsx';

export const GifGrind = ({category}) => {

const {images,isLoading} = useGifs(category); 



  return (
    <>
    <br>
    </br>
    <h1>{category}</h1>
    <br></br>
    {

     isLoading && (<h2>Cragando..</h2>)

    }
    <div className='card-grid'>
   
   
    {
     images.map((image) =>(
     <Gifitem
      key={image.id}
      //Esparciendo 
       {...image}
      />
     ))
    }
    </div>

    </>
  )


}
