import { render } from '@testing-library/react';
import { Gifitem } from '../../src/components/Gifitem.jsx';

describe('prueba en Gifitem.jsx', () => {

test('Debe de hacer prueba mtch con el snapshot', () => { 

    const title = 'naruto';
    const url = 'http://www.naruto.com/naruto.jps';



render(<Gifitem title = {title} url = {url} />)

 

 });
});