import {getHeroeById,getHeroesByOwner} from '../../data/08-imp-exp.js'
describe('Prueba en 08-imp-exp', () => { 

test('getHeroeBYId debe de retornar un heroes por id', () => {


    const id =1;
    const hero = getHeroeById(id);



   expect(hero).toEqual(   { id: 1, name: 'Batman', owner: 'DC' })
 });



     
test('getHeroeBYId debe de retornar undefined si no existe', () => {


    const id =100;
    const hero = getHeroeById(id);



   expect(hero).toBeFalsy();
 });


 test('Debe de retornar un arreglo con los heroes de dc', () => {


    const owner = 'DC';
    const hero = getHeroesByOwner(owner);
    
     expect(hero.length).toBe(3);
 });

 })