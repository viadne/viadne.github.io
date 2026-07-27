import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Pinboard from './pages/Pinboard';
import Writtens from './pages/Writtens';
import Written from './components/Written';
import HbdBriBri from './pages/26_7_26_hbdBribri';

function App() {

  return (
    <>  
      <Routes>
        <Route path= "/" element ={ <Home/>}/>
        <Route path= "/board" element ={ <Pinboard/>}/>
        <Route path= "/write" element ={ <Writtens/>}/>
        <Route path= "/writes/:writtenFile" element ={ <Written/>}/>
        <Route path= "/hbdbribri" element ={ <HbdBriBri/>}/>
      </Routes>
    </>
  )
}

export default App
