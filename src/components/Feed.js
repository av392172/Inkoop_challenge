import React from 'react'
import Card from './Card';
import './Feed.css';

const dishes = [
    {
        key: 1,
        name: "Mexica Taco",
        src: "https://imgk.timesnownews.com/story/chad-montano-lP5MCM6nZ5A-unsplash.jpg?tr=w-400,h-300,fo-auto"
    },
    {
        key: 2,
        name: "Farmhouse Pizza",
        src: "https://www.brotherskitchen.in/wp-content/uploads/2021/03/farmhouse-pizza-vegetarian-pizza-with-mouth-watering-toppings_1024-768-600x450.jpg"
    },
    {
        key: 3,
        name: "Chiken Burger",
        src: "https://www.chicken.ca/wp-content/uploads/2020/09/Moist-Chicken-Burgers.jpg"
    },
    {
        key: 4,
        name: "Loaded Nachos",
        src: "https://www.spendwithpennies.com/wp-content/uploads/2018/12/SpendWithPennies-Best-Loaded-Nachos-22.jpg"
    },
    {
        key: 5,
        name: "Hakka Noodles",
        src: "https://thebellyrulesthemind.net/wp-content/uploads/2020/12/hakka-noodles-1-720x720.jpg"
    }
]

function Feed() {
    return (
        <div className="feed__container">
            <div className="feed__text">
                <div className="feed__text__head">
                    <h1>What are you having for Lunch?</h1>
                </div>
                <div className="feed__text__para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum corporis nostrum assumenda labore.</p>
                    <hr className="line" />
                </div>
            </div>
            <div className="feed__card">
                {dishes.map(dish => (
                    <Card
                        key={dish.key}
                        name={dish.name}
                        src={dish.src}
                    />

                ))}
            </div>
        </div>
    )
}

export default Feed
