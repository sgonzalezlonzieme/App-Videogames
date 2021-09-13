import React from "react";
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { VideogameCardDetails } from "./VideogameCardDetails";

test('render contents', () => {
    const videogame = {
        description: "The fifth game in the series, Skyrim takes us on a journey through the coldest region of Cyrodiil.",
        genres: ['Action', 'RPG'],
        image: "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg",
        name: "The Elder Scrolls V: Skyrim",
        platforms: "PC, Nintendo Switch, Xbox 360, PlayStation 3",
        rating: 4.43,
        released: "2011-11-11",
    }

    const component = render(<VideogameCardDetails description={videogame.description} genres={videogame.genres} image={videogame.image} name={videogame.name} platforms={videogame.platforms} rating={videogame.rating} 
    released={videogame.released} />)

    expect(component.container).toHaveTextContent(videogame.description)
    expect(component.container).toHaveTextContent(videogame.rating)
    expect(component.container).toHaveTextContent(videogame.released)

    component.container.querySelector('label')
    component.container.querySelector('h2')
})

