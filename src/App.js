import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav } from './components/nav/Nav';
import Header from './components/header/Header';
import Home from './page/Home/Home';
import Footer from './components/footer/Footer';
import Know_me from './page/Know_me/Know_me';
import { useState } from 'react';
function App() {
  const [x, setx] = useState(true);
  return (
    <div className="App">
      <Header />
      <Nav setp={setx}/>
      {x?<Home />:<Know_me />}
      {/* <Know_me /> */}
      <Nav setp={setx} />
      <Footer />
    </div>
  );
}

export default App;
