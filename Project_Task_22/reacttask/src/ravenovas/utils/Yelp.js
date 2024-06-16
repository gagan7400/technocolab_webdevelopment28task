const apiKey = ""
// const Yelp ={};
import React, { Component } from 'react'

 const      Yelp  = {
    search(term, location, sortBy) {
        // https://cors-anywhere.herokuapp.com/
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then((res) => { return res.json() }).then((jsonResponse) => {
             if (jsonResponse.businesses) {
                return  jsonResponse.businesses.map((business)=>{
                    return  {id:business.id,
                        imageSrc:business.imageSrc,
                        name:business.name,
                        address:business.address,
                        city:business.city,
                        state:business.state,
                        zipCode:business.zipCode,
                        category:business.category,
                        rating:business.rating,
                        reviewCount:business.reviewCount} 
                })
            }
        }).catch((err) => {
            console.log(err)
        })

    }
     
}

export default  Yelp;