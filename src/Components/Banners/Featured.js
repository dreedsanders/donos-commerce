import React from 'react'

export default function Featured() {
    return (
        <div id="featured">
            <div className= "featured-info">
                <p>Featured</p>
                <h3>Donos Store</h3>
                <h4>Deals made easy for every season</h4>
                <p>Free shipping. Best prices</p>
                <button>Get Your Thing</button>
            </div>
            <div className="featured-pictures-container">
                <img className="featured-pic"></img>
                <img className="featured-pic"></img>
                <img className="featured-pic"></img>
            </div>
            
        </div>
    )
}
