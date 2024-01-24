import logo from './logo.svg';
import './App.css';
import Routing from './configure/Routing';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routing />
    </div>
  );
}

export default App;
