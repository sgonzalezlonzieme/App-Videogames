import styles from './VideogameCardDetails.module.css'


export function VideogameCardDetails(props){
    
    return(<div className={styles.container}>
        <div className={styles.text}>
            <h2>{props.name}</h2>
        </div>
        <div className={styles.text}>
             {/* buscar htmlFor */}
            <label htmlFor='genres'><strong>Genres</strong></label>
            <div className={styles.text} id='genres'>{props.genres?.join(', ')}</div>
        </div>
        <div className={styles.text}>{/*  usar endpoint de screenshots */}
            <img className={styles.image} src={props.image} alt={props.name}/>
        </div>
        <div className={styles.text}>
            {!props.description ? <div></div> :
            (<><label htmlFor='description'><strong>Description</strong></label>
            <div className={styles.text} htmlFor='description'>{props.description}</div></>)}
        </div>
        <div className={styles.text}>
            {!props.released ? <div></div> :
            (<><label htmlFor='released'><strong>Released</strong></label>
            <div className={styles.text} id='released'>{props.released}</div></>)}
        </div>
        <div className={styles.text}>
            {!props.rating ? <div></div> :
            (<><label htmlFor='rating'><strong>Rating</strong></label>
            <div className={styles.text} id='rating'>{props.rating}</div></>)}
        </div>
        <div className={styles.text}>
            {!props.platforms ? <div></div> :
            (<><label htmlFor='platforms'><strong>Platforms</strong></label>
            <div className={styles.text} id='platforms'>{props.platforms}</div></>)}
            {/* Tira error */}
        </div>
    </div>)
}