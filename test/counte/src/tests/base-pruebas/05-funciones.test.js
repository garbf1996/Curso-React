import {getUser,getUsuarioActivo} from '../../data/05-funciones.js'

//Prueba para retornar un objecto
describe('pruebas en 05-funciones', () => {
test('gteUser debe de retornar un objecto', () => { 

    const tetUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    }

    const user = getUser();

    expect(tetUser).toStrictEqual(user)

 });

const name = 'Fernado';

const user = getUsuarioActivo(name);

expect(user).toStrictEqual({
  uid: 'ABC567',
  username: name

}
);

});