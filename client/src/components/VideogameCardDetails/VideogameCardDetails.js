


export function VideogameCardDetails(props){
    
    return(<div>
        <div>
            <h2>{props.name}</h2>
        </div>
        <div>
             {/* buscar htmlFor */}
            <label htmlFor='genres'><strong>Genres</strong></label>
            <div id='genres'>{props.genres?.join(', ')}</div>
        </div>
        <div>{/*  usar endpoint de screenshots */}
            <img src={props.image} alt={props.name}/>
        </div>
        <div>
            <label htmlFor='description'><strong>Description</strong></label>
            <div htmlFor='description'>{props.description}</div>
        </div>
        <div>
            <label htmlFor='released'><strong>Released</strong></label>
            <div id='released'>{props.released}</div>
        </div>
        <div>
            <label htmlFor='rating'><strong>Rating</strong></label>
            <div id='rating'>{props.rating}</div>
        </div>
        <div>
            <label htmlFor='platforms'><strong>Platforms</strong></label>
            <div id='platforms'>{props.platforms}</div>
            {/* Tira error */}
        </div>
    </div>)
}