import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Story from './components/Story';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Introduction/>
     <Story/>
    </div>
  );
}

export default App;
