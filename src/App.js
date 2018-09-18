import React, { Component } from "react";
import "./App.css";
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'

import Product from './Components/Product'
import CartItem from './Components/CartItem'
import AddProduct from './Components/AddProduct'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      apiKey:'4900d644',
      cart: [],
      hats: [
        {
          id: 1,
          title: "Fisherman's Hat",
          description:
            "Headgear commonly used by fishermen. Increases fishing skill marginally.",
          price: 12.99,
          imageUrl: "https://via.placeholder.com/150x150"
        },
        {
          id: 2,
          title: "Metal Hat",
          description: "Uncomfortable, but sturdy.",
          price: 8.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ],
      beachGear: [
        {
          id: 3,
          title: "Tent",
          description: "Portable shelter.",
          price: 32.99,
          imageUrl: "https://via.placeholder.com/150x150"
        }
      ],
      inputText:''
    };
  }

  componentDidMount(){
      axios.get(`http://104.248.178.153/products/catalog?key=`+this.state.apiKey)
           
           .then(productsResponse=>{
               console.log(productsResponse)
               productsResponse.data.forEach(item=> item.quantity = 0)

               let shirt= productsResponse.data.filter(item => item.category==='shirt')
               let swag= productsResponse.data.filter(item=> item.category==='swag')
               let hat= productsResponse.data.filter(item=> item.category==='hat')
               let coldWeather= productsResponse.data.filter(item=> item.category==='cold weather')

               this.setState({
                  shirt:shirt,
                  swag:swag,
                  hat:hat,
                  coldWeather:coldWeather
               })
               console.log(productsResponse);
           })
  }

  addToCart=item=> {
    this.setState({
      cart: [...this.state.cart, item]
    });
  };

  checkout = () => {
    this.setState({ cart: [] });
    alert("Purchase is complete!");
  };

  inputTextChange=(val)=>{
      this.setState=({inputText:val})
  }

  render() {
    return (
      <div className="App">
      <ToastContainer />
        <section className="products">
            <h1>Products</h1>
            <h2>Hats</h2>
            <input placeholder='search' onChange={(e)=>this.inputTextChange(e.target.value)} /> 
            {this.state.hats.map(item => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
             ))}

             {/* {this.state.hats.filter((e)=>(e,this.inputTextChange))} */}

            <h2>Beach Gear</h2>
            {this.state.beachGear.map(item => (
            <Product key={item.id} item={item} addToCart={this.addToCart} />
             ))}
        </section>

        <section className="cart">
          <h1>Cart</h1>
          <h2>
            Total: $
            {this.state.cart.reduce(
              (totalPrice, product) => (totalPrice += product.price),
              0
            )}
          </h2>
          <button onClick={this.checkout}>Checkout</button>
          {this.state.cart.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </section>
      </div>
    );
  }
}









// import React, {Component} from 'react'

// export default class App extends Component{
//     constructor(){
//         super();
//         this.state={
//             products:[
//                 {
//                     id=0,
//                     imageURL='https://images.the-house.com/burton-process-blem-snwbrd-162-15-zoom.jpg',
//                     title='snowboard',
//                     price=500,
//                     description='A snow surfing product'},
//                 {
//                     id=1,
//                     imageURL='https://geekandsundry.com/wp-content/uploads/2017/07/Bob-Ross-The-Art-of-Chill-featured.jpg',
//                     title='Bob Ross',
//                     price=3.50,
//                     description='the real Bob Ross'
//                 },
//                 {
//                     id=2,
//                     imageURL='https://via.placeholder.com/150x150',
//                     title='rock',
//                     price=5.0,
//                     description='a pet rock'
//                 }
//                 ],
//             cart:[]

//         }
//     }

//     render(){
//         return(
//             <div className='App'>
//                 <section className='products'>

//                     <h1>Products</h1>
//                     {this.state.products.map(item=>(
//                         <div key={item.id} className='product'>
//                             <img src={item.imageURL} />
//                             <h4>{item.title}</h4>
//                             <p>{item.description}</p>
//                             <p>{item.price}</p>
//                             <button>Add To Cart</button>
                        
//                         </div>
//                     ))}
//                 </section>

//                 <section className='cart'>
//                     <h1>Cart</h1>
//                 </section>
//             </div>
//         )
//     }
// }