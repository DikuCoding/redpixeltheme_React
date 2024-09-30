import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Story from './components/Story';
import MyProjects from './components/MyProjects';
import Footer from './components/Footer';
import Post from './components/Post';
import PostItems from './components/PostItems';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Introduction/>
     <Story/>
     <Post/>
     <PostItems/>
     <MyProjects/>
     <Footer/>
    </div>
  );
}

export default App;
