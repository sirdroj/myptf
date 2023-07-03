import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Nav } from './components/Nav';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <AboutMe />
    </div>
  );
}

export default App;
