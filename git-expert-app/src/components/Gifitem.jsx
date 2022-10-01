import PropTypes from 'prop-types';

export default function Gifitem({title,url}) {

   
  return (
    <>
   <div className="card">
    <img src={url} alt={title} />
   <p>{ title }</p> 
   </div>
    </>
  )
}

Gifitem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,

};

