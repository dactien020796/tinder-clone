import React, { useState, useEffect } from 'react';
import '../css/TinderCards.css';
import TinderCard from 'react-tinder-card';
import axios from '../axios.js';

function TinderCards() {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function getData() {
            const res = await axios.get('tinder/cards');
            setPeople(res.data);
        }

        getData();
    }, [])

    const swiped = (direction, nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        //setLastDirection(direction)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
        //charactersState = charactersState.filter(character => character.name !== name)
        //setCharacters(charactersState)
    }

    return (
        <div className='tinderCards'>
            <div className="tinderCards__cardContainer">
                {people.map(item => (
                    <TinderCard
                        className="swipe"
                        key=""
                        preventSwipe={["up", "down"]}
                        onSwipe={dir => swiped(dir, item.name)}
                        onCardLeftScreen={() => outOfFrame(item.name)}
                    >
                        <div
                            className="card"
                            style={{ backgroundImage: `url(${item.imgUrl})` }}>
                            <h3>{item.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards;
