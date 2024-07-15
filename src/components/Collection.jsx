import React from "react"
import star from "/src/assets/star.png"
import whiteStar from "/src/assets/white-star.png"


export default function Collection(){

    const [coffees, setCoffees] = React.useState([])
    const [all, setAll] = React.useState(true)

    React.useEffect(() => {

        fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
        .then(res => res.json())
        .then(data => {
            setCoffees(data)
        })
        .catch(error => {
            console.log(error)
        })

    }, [])

   console.log(coffees)
    const coffeeElements = coffees.map(coffee => {
        return(
            all ? <div key={coffee.id} className="coffee-element">
            {coffee.popular ? <div>
                <label className="popular">Popular</label>
                <img src={coffee.image} className="coffee-image" />
                
            </div> : <img src={coffee.image} className="coffee-image" />}
                <div className="coffee-element-division">
                    <p className="coffee-name">{coffee.name}</p>
                    <label className="coffee-price">{coffee.price}</label>
                </div>
                <div className="coffee-element-division">
                    {coffee.votes === 0 ? (<div className="no-ratings"><img src={whiteStar} className="white-star" /><label>No ratings</label></div>) : (<div className="coffee-votes">
                        <img src={star} />
                        <label className="coffee-rating">{coffee.rating}</label>
                        <label>({coffee.votes} votes)</label>
                    </div>)
                    }
                   
                </div>
            
        </div> : (coffee.available ? <div key={coffee.id} className="coffee-element">
            {coffee.popular ? <div>
                <label className="popular">Popular</label>
                <img src={coffee.image} className="coffee-image" />
                
            </div> : <img src={coffee.image} className="coffee-image" />}
                <div className="coffee-element-division">
                    <p className="coffee-name">{coffee.name}</p>
                    <label className="coffee-price">{coffee.price}</label>
                </div>
                <div className="coffee-element-division">
                    {coffee.votes === 0 ? (<div className="no-ratings"><img src={whiteStar} className="white-star" /><label>No ratings</label></div>) : (<div className="coffee-votes">
                        <img src={star} />
                        <label className="coffee-rating">{coffee.rating}</label>
                        <label>({coffee.votes} votes)</label>
                    </div>)
                    }
                   
                </div>
            
        </div> : null)
        
        )
    })
    

    return(
        <div className="collection">
            <h2>Our Collection</h2>
            <p>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fres weekly.</p>
            <div className="buttons">
                <button onClick={() => setAll(true)} className={all ? "active-button" : ""}>All Products</button>
                <button onClick={() => setAll(false)} className={all ? "" : "active-button"}>Available Now</button>
            </div>
            <div className="coffee-collection">
                {coffeeElements}
            </div>
        </div>
    )
}
