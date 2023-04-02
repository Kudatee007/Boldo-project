import logo from './logo.svg';
import './App.css';
import Hompage1 from './components/Hompage1';
import Navbar from './components/Navbar';
import Homepage2 from './components/Homepage2';
import Homepage3 from './components/Homepage3';
import Footer from './components/Footer';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
    <Hompage1/ >
    <Homepage2 />
    <Homepage3 />
    {/* <Blog /> */}
    <Footer />
    </div>
  );
}

export default App;
