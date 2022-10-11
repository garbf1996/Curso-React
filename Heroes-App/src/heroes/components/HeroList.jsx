import { getHeroes } from "../../helpers/getHeroes"

export const HeroList = ({publisher}) => {

    const heros = getHeroes(publisher);

  return (
    <>
    <div className="row rows-cols-1 row-cols-md-3 g-3">
   {
     heros.map(hero =>(
       <li key={hero.id}>
   {hero.superhero}
  </li>
  ))
}
</div>
    </>
  )
}
