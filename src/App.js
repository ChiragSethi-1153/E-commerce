import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './configure/Routing';
import Navbar from './components/Navbar/Navbar' ;
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routing />        
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
