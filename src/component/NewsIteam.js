import React, { Component } from 'react'
import './NewsIteam.css';

export default class NewsIteam extends Component {

  render() {
    
    let {title, description, imageurl, newsurl} = this.props;

    return (
      <>
         <div className='container my-3'>
          <div className="card">
           <img src={!imageurl?"https://cdn.siasat.com/wp-content/uploads/2022/06/Google.jpg" :imageurl} classname="card-img-top" alt="..." />
           <div classname="card-body">
             <h6 classname="card-title ">{title}</h6>
             <small classname="card-text">{description}</small>
             <div className='More'>
             <a href={newsurl} target="_blank">Read More</a></div>
           </div>
         </div>
         </div> 
      </>
    )
  }
}
