import "./App.css";
import { useState } from "react";
import data from "./assets/data.json";
import Item from "./components/Item" 

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */


function App() {

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  return (
    <div className="App">

      <div class = "side-panel">
        <div class = "side-panel-int">
        <h1>Filter and Sort</h1>
        <h2>❥ View by package</h2>
        <ul>
          <button class ="side-panel-button"><h3>Zodiac Package</h3></button>
          <button class ="side-panel-button"><h3>BTS Inspired Package</h3></button>
          <button class ="side-panel-button"><h3>Euphoria Package</h3></button>
        </ul>
        <h2>❥ View by aesthetic</h2>
        <ul>
          <button class ="side-panel-button"><h3>E-girl/E-boy</h3></button>
          <button class ="side-panel-button"><h3>Soft girl/Soft boy</h3></button>
          <button class ="side-panel-button"><h3>Cottagecore</h3></button>
          <button class ="side-panel-button"><h3>Artsy</h3></button>
          <button class ="side-panel-button"><h3>Grunge</h3></button>
          <button class ="side-panel-button"><h3>Baddie</h3></button>
        </ul>
        <h2>❥ View all</h2>

<div class="side-panel-sort-buttons">
        <button class="side-panel-sort">Sort by price</button>
        <button class="side-panel-sort">Sort by duration</button>
        </div>
        </div>
      </div>

      <div style={{marginLeft: '1vw'}}>
        <div class = "header">
          <div class = "header-img"><img src = "images/logo.png"></img></div>
          <div class="header-text">Makeup Cafe</div>
        </div>
        <div class = "header-subtext">
          Hire a professional artist to give you or your whole team a fantastic makeup look!
        </div>
      

      {data.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
        }}/> // replace with BakeryItem component
      ))}

    </div>

      <div>
        <h2>Cart</h2>
        <p>Total: ${total}</p>
        {/* TODO: render a list of items in the cart */}
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
