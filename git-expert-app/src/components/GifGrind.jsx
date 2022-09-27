
import { useEffect, useState, } from 'react';
import {getGifs} from '../helpers/getGifs.js';
import Gifitem from './Gifitem.jsx';

export const GifGrind = ({category}) => {

 const [images, setImages] = useState([]);

 const getImages = async()=>{
  const newImages = await getGifs(category);
  setImages(newImages);
 }
 
  useEffect( ()=>{
  getImages();
  },[]);
  
console.log(images);
  return (
    <>
    <div className='card-grid'>
    <h1>{category}</h1>
   
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
