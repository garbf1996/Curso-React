
import { useEffect, useState, } from 'react';
import {getGifs} from '../helpers/getGifs.js';

export const GifGrind = ({category}) => {

 const [images, setImages] = useState([]);
 
  useEffect(()=>{
  getGifs(category);
  },[]);
  

  return (
    <>
    <h1>hola</h1>
    </>
  )


}
