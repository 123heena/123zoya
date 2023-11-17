import Header from './component/Header'
import Content from './component/Content'
import Header_class from './component/Header_class'
import Footer from './component/Footer'
function App() {
  return (
    <div>
      <Header/>
       <Content name="Heena Kousar" age={20}/>
       <>
       <Header_class/>
       </>
       <Footer/>
    </div>
  );
}

export default App;
