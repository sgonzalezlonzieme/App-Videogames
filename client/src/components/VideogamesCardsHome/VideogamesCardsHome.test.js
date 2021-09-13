import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { VideogamesCardsHome } from "./VideogamesCardsHome.js";

xtest('render contents', () => {
    const videogame = { //videogames
        genres: ['Action', 'RPG'],
        image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        name: "The Elder Scrolls V: Skyrim",
        rating: 4.43,
    }

    const component = render(<VideogamesCardsHome  genres={videogame.name} image={videogame.image} name={videogame.name}  rating={videogame.rating} 
    />)

    expect(component.container).toHaveTextContent(videogame.name)
    expect(component.container).toHaveTextContent(videogame.rating)

    component.container.querySelector('img')
    component.container.querySelector('strong')
})

