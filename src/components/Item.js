// TODO: create a component that displays a single bakery item
// TODO: create a component that displays a single bakery item
import "../App.css";

import React from 'react'

export default function Item(props) {
    return (
        <>
        <p>
            <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start", width: "40vw", marginTop: "2vw"}}>
            <div className="BakeryItem">
                <img className="BakeryItem" src = {props.image} />
            </div>
           
        <div style={{marginLeft: "2vw"}}>
        <div style={{fontFamily: 'Courier New', fontWeight: 'bold'}} class = "side-panel-sort">{props.name}</div>
        <p>{props.description}</p>
        <p>${props.price} <button class="header-subtext" style={{fontWeight: 'bold'}} onClick={props.onClick}>Add To Cart</button></p>
        
        </div>
        </div>
        </p>
        </>
    )
}
