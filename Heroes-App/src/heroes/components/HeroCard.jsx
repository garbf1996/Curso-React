

export const HeroCard = (
{
  id,
  superhero, 
  publisher, 
  alter_ego,
  first_appearance,
  characters

}

) => {



  const images = `/assets/hereoes/${id}.jpg`;
 


  return (
   <>
   <div className="col">
    <div className="col-4">
   <img src={images} alt={superhero} />
    </div>
   </div>
   </>
  )
}
