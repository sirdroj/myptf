import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav } from './components/nav/Nav';
import Header from './components/header/Header';
import Home from './page/Home';
import Footer from './components/footer/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Home />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
