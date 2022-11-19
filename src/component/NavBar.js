import React, { Component } from 'react'
import './Navbar.css'

export default class NavBar extends Component {
  render() {
    return (
      <>
           <nav>
                <div className='text container'>
                  <span>Alph News</span>
                  <a href='/' className='hide'>Home</a>
                  <a href='/' className='hide'>About</a>
                </div>
           </nav>
      </>
    )
  }
}
