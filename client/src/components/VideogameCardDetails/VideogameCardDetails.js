


export function VideogameCardDetails(props){
    
    return(<div>
        <div>
            <h2>{props.name}</h2>
        </div>
        <div>
            <label><strong>Genres</strong></label>
            <div>{props.genres?.join(', ')}</div>
        </div>
        <div>{/*  usar endpoint de screenshots */}
            <img src={props.image} alt={props.name}/>
        </div>
        <div>
            <label><strong>Description</strong></label>
            <div>{props.description}</div>
        </div>
        <div>
            <label><strong>Released</strong></label>
            <div>{props.released}</div>
        </div>
        <div>
            <label><strong>Rating</strong></label>
            <div>{props.rating}</div>
        </div>
        <div>
            <label><strong>Platforms</strong></label>
            <div>{props.platforms}</div>
        </div>
    </div>)
}