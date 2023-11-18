import React, { Component } from 'react';
 
class Content2 extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://th.bing.com/th/id/OIP.YAXlTjvtEKchdMVc5laZhwHaE8?rs=1&pid=ImgDetMain')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    return (
      <div style={myStyle}>
        <h1> IMAGE</h1>
      </div>
    );
  }
}
  
export default Content2;