import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {
//Custo hook para nevegacion
const navigate = useNavigate();

    //Funcion para cerrar la cesion
    const onLogout = () =>{
      //cerrar la cession
     navigate('/login',{
        //para evitar que pueda regresar a el hitorial anterio 
        replace: true
     });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ?'active':'' }`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ?'active':'' }`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                   <span className='nav-item nav-link text-primary'>
                     Garber Batista
                   </span>
                   <button className='nav-item nav-link btn' onClick={onLogout}>
                     Logout
                   </button>
                </ul>
            </div>
        </nav>
    )
}