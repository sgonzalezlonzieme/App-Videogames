import './LandingPage.css';
import { useEffect } from 'react';
import { getVideogames } from '../../actions';
import { useDispatch } from 'react-redux';
import { ButtonHome } from '../ButtonHome/ButtonHome';

export function LandingPage(){

    let dispatch = useDispatch()

    useEffect(() => {
      dispatch(getVideogames())
    }, [])

    return(
    <div className='LandingPage_All'>
     <div>
         <ButtonHome />
     </div>  
    </div>)
}