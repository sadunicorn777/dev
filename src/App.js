import "./App.css";
import { useState } from "react";
import data from "./assets/data.json";
import Item from "./components/Item" 

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
data.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function shuffle(list) {
  let currentIndex = list.length, randomIndex

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [list[currentIndex], list[randomIndex]] = [
      list[randomIndex], list[currentIndex]];
  }

  return list; 
}



function App() {

  const [cartItems, setCartItems] = useState([])
  const [total, setTotal] = useState(0)
  const [duration, setDuration] = useState(0)
  const [category, setCategory] = useState("")
  const [currSort, setCurrSort] = useState("none")


  if (currSort == "price") {
  data.sort((a, b) => {
    let keyA = a.price
    let keyB = b.price

    if (keyA < keyB) {
      return 1
    } else if (keyB < keyA) {
      return -1
    } else {
      return 0
    }
  })
} else if (currSort == "duration") {

  data.sort((a, b) => {
    let keyA = a.duration
    let keyB = b.duration

    if (keyA < keyB) {
      return 1
    } else if (keyB < keyA) {
      return -1
    } else {
      return 0
    }
  })
} else if (currSort == "none") {
  shuffle(data)
}


  
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */


  return (
    <div className="App">

      <div class = "side-panel">
        <div class = "side-panel-int">
        <h1>Filter and Sort</h1>
        <button style={{color: "#F194C7", border: 0, background: "transparent", paddingBottom: "1vh"}} onClick = {() => {
          setCategory("")
          setCurrSort("none")
        }}>VIEW ALL</button>
        <h2>❥ View by package</h2>
        <ul>
          <button onClick={() => setCategory("zodiac")} class ="side-panel-button"><h3 style={category == "zodiac" ? {background: '#f194c7b1', color: 'white', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'}: {}}>Zodiac Package</h3></button>
          <button onClick={() => setCategory("bts")} class ="side-panel-button"><h3 style={category == "bts" ? {background: '#f194c7b1', color: 'white', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'}: {}}>BTS Inspired Package</h3></button>
          <button onClick={() => setCategory("euphoria")} class ="side-panel-button"><h3 style={category == "euphoria" ? {background: '#f194c7b1', color: 'white', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'}: {}}>Euphoria Package</h3></button>
        </ul>
        <h2>❥ View by aesthetic</h2>
        <ul>
          <button onClick={() => setCategory("e")} class ="side-panel-button"><h3 style={category == "e" ? {background: '#f194c7b1', color: 'white', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'}: {}}>E-girl/E-boy</h3></button>
          <button onClick={() => setCategory("soft")} class ="side-panel-button"><h3 style={category == "soft" ? {background: '#f194c7b1', color: 'white', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'}: {}}>Soft girl/Soft boy</h3></button>
          <button onClick={() => setCategory("cottage")} class ="side-panel-button"><h3 style={category == "cottage" ? {background: '#f194c7b1', color: 'white', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'}: {}}>Cottagecore</h3></button>
          <button onClick={() => setCategory("artsy")} class ="side-panel-button"><h3 style={category == "artsy" ? {background: '#f194c7b1', color: 'white', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'}: {}}>Artsy/Festive</h3></button>
          <button onClick={() => setCategory("goth")} class ="side-panel-button"><h3 style={category == "goth" ? {background: '#f194c7b1', color: 'white', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'}: {}}>Grunge/Goth/Macabre</h3></button>
          <button onClick={() => setCategory("simple")} class ="side-panel-button"><h3 style={category == "simple" ? {background: '#f194c7b1', color: 'white', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'}: {}}>Simple/Everyday/Baddie</h3></button>
        </ul>
        <h2>❥ Sort</h2>

<div class="side-panel-sort-buttons">
        <button onClick={() => {
          setCurrSort("price")}} style={currSort == "price" ? {background: 'white', color: '#F194C7', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'} : {}} class="side-panel-sort">Sort by price</button>
        <button onClick={() => {
          setCurrSort("duration")}} class="side-panel-sort" style={currSort == "duration" ? {background: 'white', color: '#F194C7', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'} : {}}>Sort by duration</button>
        <button onClick={() => {
          setCurrSort("none")
          }} 
          style={currSort == "none" ? {background: 'white', color: '#F194C7', filter: 'drop-shadow(0px 0px 4px #f194c7b1)'} : {}}
          class="side-panel-sort"> No sort</button>
        </div>
        </div>
      </div>

      <div style={{marginLeft: '23vw'}}>
        <div class = "header">
          <div class = "header-img"><img src = "images/logo.png"></img></div>
          <div class="header-text">Makeup Cafe</div>
        </div>
        <div class = "header-subtext">
          Hire a professional artist to give you or your whole team a fantastic makeup look!
        </div>


          <div style={{position: "absolute", overflow: "scroll"}}>
      

      {data.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
      category == "zodiac" ?
        item.category == "zodiac" ? <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/> : null // replace with BakeryItem component 
        : category == "bts" ? 
        item.category == "bts" ? <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/> : null
        : category == "euphoria" ? 
        item.category == "euphoria" ? <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/> : null
        : category == "e" ? 
        item.category == "e" ? <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/> : null
        : category == "soft" ? 
        item.category == "soft" ? <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/> : null
        : category == "cottage" ? 
        item.category == "cottage" ? <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/> : null
        : category == "artsy" ?
        item.category == "artsy" ? <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/> : null
        : category == "goth" ? 
        item.category == "goth" ? <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/> : null
        : category == "simple" ? 
        item.category == "simple" ? <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/> : null
        : <Item key = {index} image = {item.image} name = {item.name} description = {item.description} price = {item.price} duration = {item.duration} onClick={() => {
          setCartItems(cartItems => [...cartItems, item.name])
          setTotal(total + item.price)
          setDuration(duration + item.duration)
        }}/>
      ))}

</div>

    </div>

      <div style={{marginLeft: '65vw', borderLeft: "1px solid #F194C7", height: "100vh", paddingLeft: "3vw", position: "fixed"}}>
        <div style={{marginTop: '20vh'}}>
        <h1>Cart</h1>
        <p><span>Total Price: </span>
        <span class="cart-total">${total}</span></p>
        <p><span>Total Duration: </span>
        <span class="cart-total">{duration} hours</span></p>
        {/* TODO: render a list of items in the cart */}
        {cartItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
