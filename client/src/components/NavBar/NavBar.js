import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { linkHome } from "../../actions"

export function NavBar(){
    const dispatch = useDispatch()

    function handleClick(){
        dispatch(linkHome())
    }

    return(
        <div>
            {/* Buscar un icono para la home */}
            <div>
               <Link onClick={handleClick} to='/home'>Home</Link>
            </div> 
            <div>
                <Link to='/create'>Create your videogame</Link>
            </div>
        </div>
    )
}