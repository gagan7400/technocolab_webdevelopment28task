import React, { Component } from 'react'
import './BusinessList.css';
import Business from './Business';

export default class BusinessList extends Component {
  render() {
    let { businesses } = this.props;
     return (
      <div className='BusinessList'>
        {businesses.map((business) => {
          return <Business business={business} key={business.id}/>
        })}
      </div>
    )
  }
}
