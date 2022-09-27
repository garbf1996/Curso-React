
import { useEffect, useState, } from 'react';
import {getGifs} from '../helpers/getGifs.js';

export const GifGrind = ({category}) => {

 const [images, setImages] = useState([]);

 const getImages = async()=>{
  const newImages = await getGifs(category);
  setImages(newImages);
 }
 
  useEffect( ()=>{
  getImages();
  },[]);
  

  return (
    <>
    <h1>{category}</h1>
    <ol>
    {
     images.map(({id,title}) =>(
    
      <li key={id}>{title}</li>
     ))
    }
    </ol>
    </>
  )


}
