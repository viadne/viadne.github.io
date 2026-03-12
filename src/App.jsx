import './App.css'
import BlogImage from './components/BlogImage'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Pinboard from './pages/Pinboard';
import Written from './pages/Written';

function App() {

  return (
    <>  
      <Routes>
        <Route path= "/" element ={ <Home/>}/>
        <Route path= "/board" element ={ <Pinboard/>}/>
        <Route path= "/write" element ={ <Written/>}/>
      </Routes>
    </>
  )
}

export default App
