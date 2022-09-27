
import { useEffect } from 'react';
import {getGifs} from '../helpers/getGifs.js';

export const GifGrind = ({category}) => {
 
  useEffect(()=>{
  getGifs(category);
  },[]);
  

  return (
    <>
    <h1>hola</h1>
    </>
  )


}
