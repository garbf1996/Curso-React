
import {getHeroeByIdAsync} from '../../data/09-promesas.js';


describe('Pureba en 0-promesa', () => { 

test('getHeroeById debe de retornar una heroe', (done) => {  

    const id = 1;
getHeroeByIdAsync(id).then(hero => {

    expect(hero).toEqual({
        id:1,
        name:'Batman',
        owner:'DC'
    })

done();

});


});

test('getHeroeById debe de retornar un error si heroe no exicte', (done) => {  

const id =100;

getHeroeByIdAsync(id)
.catch(error => {


expect(error).toBe(`No se pudo encontrar el héroe${id}`);  
 

done();

});

});


 });