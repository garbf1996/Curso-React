import {retornaArreglo} from '../../data/07-deses-arr.js'

describe('pureba de  array', () => {
 
    test('debe de retornar un string y un nemero', () => {

      const [letters, numbers] = retornaArreglo();

      expect(letters).toBe('ABC');
      expect(numbers).toBe(123);

      expect(typeof letters).toBe('string');
      expect(typeof numbers).toBe('number');

     });


 });