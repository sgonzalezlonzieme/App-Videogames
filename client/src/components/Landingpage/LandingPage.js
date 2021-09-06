import './LandingPage.css';
import { useEffect } from 'react';
import { getVideogames, getGenres } from '../../actions';
import { useDispatch } from 'react-redux';
import { LandingPageButton } from '../LandingPageButton/LandingPageButton';

export function LandingPage(){

    let dispatch = useDispatch()

    useEffect(() => {
      dispatch(getVideogames());
      dispatch(getGenres());
      //ver si traer acá o no los genres
    }, [])  // eslint-disable-line react-hooks/exhaustive-deps 

    return(
    <div className='LandingPage_All'>
         <LandingPageButton />
    </div>)
}