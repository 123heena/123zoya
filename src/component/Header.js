import React from 'react';
import "./Header.css"
import Image from './image/image2.jpeg'
class Header extends React.Component
{
  render()
  {
    return (
      <div className="header">
        <h1 style={{color:"purple",frontWeight:"bold"}}> 
          <center>
            Portfolio of Heena Kousar
            </center>
            </h1>
        <h2>Welcome to Portfolio of Heena Kousar</h2>
        <img src={Image}/>
       
      </div>
    )
  }
}
 

export default Header