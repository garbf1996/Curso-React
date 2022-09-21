import {getSaludo} from '../../data/02-template-string.js'

describe('prueba en 02-template-string',()=>{

test('getSaludo dede de retornar "Hola garber" ', () => { 

const name = 'garber';

const message = getSaludo(name);

expect(message).toBe(`Hola ${name}`);

 })

});