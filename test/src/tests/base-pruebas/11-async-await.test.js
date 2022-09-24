import {getImagen} from '../../data/11-async-await.js';

describe('prueba en 11-async-await', () => { 
    
test('getImagen debe de retornar un URL de la image', async() => {


const url = await getImagen();

console.log(url);


expect(typeof url).toBe('string');


 });

 });