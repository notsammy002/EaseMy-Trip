import { Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './Components/Home/Home';

import Navbar from './Components/Navbar/Navbar';
import { ProductLanding } from './Components/ProductFlights/ProductLanding/ProductLanding';

function App() {


  
  // const dispatch = useDispatch()
  // const flightData = useSelector(state=>state.flightData.data)
  // useEffect(()=>{
  //   dispatch(fetchFlightData())
  // },[dispatch])

  return (
    <div className="App">
     <Navbar/>


     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/flight" element={ <ProductLanding/> }/>
     </Routes>
    </div>
  );
}

export default App;
