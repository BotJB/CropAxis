import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/Hero';

import Pic1 from './assests/Pic1.jpg'
import Pic2 from './assests/Pic2.jpg'
import Slider from './components/Slider/Slider';
import Pic3 from './assests/Pic3.jpg'
import Nav from './components/nav/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Hero imageSrc={Pic1}/>
      <Slider
      imgSrc={Pic2}
      title={'Why choose cropAxis?'}
      subtitle={"Because we deliver what we say for real"}
       flipped={true} />
        <Slider
      imgSrc={Pic3}
      title={'What we offer?'}
      subtitle={"We offer plenty of things to make your lives easier"}
       flipped={false} />

    </div>
  );
}

export default App;
