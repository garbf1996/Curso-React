import { getHeroes } from "../../helpers/getHeroes"

export const HeroList = ({publisher}) => {

    const heros = getHeroes(publisher);

  return (
    <>
   {
  heros.map(hero =>(
  <li key={hero.id}>
   {hero.superhero}
  </li>
  ))
   }
    </>
  )
}
