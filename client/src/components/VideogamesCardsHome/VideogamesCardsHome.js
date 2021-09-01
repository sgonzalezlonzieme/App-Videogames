import { Link } from 'react-router-dom';

export function VideogamesCardsHome(props){

    return(
        <div>
            <div key={props.name}>
            <Link to={`/details/${props.id}`}><h1><strong>{props.name}</strong></h1></Link>   
            </div>
            <div key={props.genres}>
                {props.genres}
            </div>
            <div>
                <img src={props.image} alt={props.name}/>
            </div>
        </div>
    )
}