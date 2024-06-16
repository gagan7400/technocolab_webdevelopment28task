import React, { Component } from 'react'
import SearchBar from './SearchBar.js'
import BusinessList from './BusinessList.js'
import Yelp from './utils/Yelp';
// let Businessobj = {
//     imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
//     name: 'MarginOtto Pizzeria',
//     address: '1010 Paddington Way',
//     city: 'Flavortown',
//     state: 'NY',
//     zipCode: '10101',
//     category: 'Italian',
//     rating: 4.5,
//     reviewCount: 90
// }
// let businesses = [
//     Businessobj,
//     Businessobj,
//     Businessobj,
//     Businessobj,
//     Businessobj,
//     Businessobj,
// ]
export default class App extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        businesses:[]
      }
    }
    
    searchYelp(term ,location,sortBy){
        Yelp.search(term ,location,sortBy);
        then((businesses)=>{this.setState({businesses:businesses})})
         }
    render() {
        return (
            <div className='App'>
                <h1>ravenous</h1>
                <SearchBar searchYelp={this.searchYelp} />
                <BusinessList businesses={businesses} />
            </div>
        )
    }
}

