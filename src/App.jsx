import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Pinboard from './pages/Pinboard';
import Writtens from './pages/Writtens';
import Written from './components/Written';

function App() {

  return (
    <>  
      <Routes>
        <Route path= "/" element ={ <Home/>}/>
        <Route path= "/board" element ={ <Pinboard/>}/>
        <Route path= "/write" element ={ <Writtens/>}/>
        <Route path= "/writes/:writtenFile" element ={ <Written/>}/>
      </Routes>
    </>
  )
}

export default App
