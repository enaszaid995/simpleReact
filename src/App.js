import logo from './logo.svg';
import './App.css';
import Nav from './nav';
import Carosal from './carouselPage';
import About from './About/about';
import Service from './service/service';
import Form from './form/form';
import Footer from './Footer/footer';
function App() {
  return (
    <div className="App">
      <Nav />
      <Carosal/>
      <About/>
      <Service/>
      <Form/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
