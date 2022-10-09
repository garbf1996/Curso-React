import { heroes } from "../heroes/data/heroes";

export  const getHeroes =(publisher)=>{

  const validPublisher = ['DC Comics','Marvel Comics'];
 //Si no exicte heroes
if(!validPublisher.includes(publisher)){
    throw new Error(`${publisher} is not a valid publisher`);
}
 //Si exicte heroes
return heroes.filter(heroe=>heroe.publisher === publisher);


}