import './App.css';
import {Routes,Route} from "react-router-dom"
import CubeContainer from './components/Cube/CubeContainer';
import XRCubeContainer from './XrCube/XRCubeContainer';
import XRHitContainer from './XrHit/XRHitContainer';
import XRHitModelContainer from './XRModel/XRHitModelContainer';
function App() {
  return (
    <div className="App">
        <Routes>
           <Route path='/' element={<CubeContainer/>}/>
           <Route path='/xr-cube' element={<XRCubeContainer/>}/>
           <Route path='/xr-hit' element={<XRHitContainer/>}/>
           <Route path='/xr-model' element={<XRHitModelContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
