import React from 'react'
import Content2 from './component/Content'
import Header from './component/Header'
import Content from './component/Content'
import Footer from './component/Footer'
const myStyle={
  backgroundImage: 
"url('https://th.bing.com/th/id/OIP.YAXlTjvtEKchdMVc5laZhwHaE8?rs=1&pid=ImgDetMain')",
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
function App() {
  return (
    <div style={myStyle}>
        <h1> IMAGE</h1>
      <Content2/>
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}

export default App