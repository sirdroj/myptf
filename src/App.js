import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav } from './components/nav/Nav';
import Header from './components/header/Header';
import Home from './page/Home/Home';
import Footer from './components/footer/Footer';
import Know_me from './page/Know_me/Know_me';
import { useState } from 'react';
import Navbar2 from './components/nav/Navbar2'
import Reach_me from './page/reach me/Reach_me';
import Resume from './page/Resume/Resume';
import Contact from './page/Contact/Contact';
function App() {
  const [pg, setpg] = useState(3);


  function MyComponent(option) {
    let componentToRender;
    // console.log(option)
    switch (option) {
      case 1:
        componentToRender = <Home/>;
        break;
      case 2:
        componentToRender = (
          <Know_me />
        );
        break;
      case 3:
        componentToRender = <Contact />;
        break;
      case 4:
        componentToRender = <Resume />;
        break;
    }
    return componentToRender;
  }
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar2 setpg={setpg} />
      {/* <Nav setpg={setpg}/> */}
      {/* {pg?<Home />:<Know_me />} */}
      {MyComponent(pg)}
      {/* <Know_me /> */}
      {/* <Nav setpg={setpg} /> */}
      <Footer />
    </div>
  );
}

export default App;
