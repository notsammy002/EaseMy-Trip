

import { Route, Routes } from 'react-router-dom';
import './App.css';
// import BottomAppBar from './Components/Home/BottomAppBar';

import Home from './Components/Home/Home';
// import MultipleSelectPlaceholder from './Components/Home/MultipleSelectPlaceholder';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     {/* <BottomAppBar/> */}
     {/* <MultipleSelectPlaceholder/> */}
     <Navbar/>


     <Routes>
       <Route path="/" element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
