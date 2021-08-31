


export function VideogamesCardsHome(props){

    return(
        <div>
            <div key={props.name}>
                <h1><strong>{props.name}</strong></h1>
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