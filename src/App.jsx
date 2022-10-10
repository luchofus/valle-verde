import {Navbar} from './components/navbar/Navbar.jsx';
import './App.css';
import { Children } from './components/Children.jsx';
import { ContButtonContainer } from './pages/ContButtonContainer.jsx';
import { GetProductosContainer } from './components/ItemListContainer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
          <Navbar/>
          {/* <Children/> */}
          <ContButtonContainer texto={"Aguante River Plei"}/>
          <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}} className='row container-fluid'>
            <GetProductosContainer/>
          </div>
  </>
  ) 
}

export default App;
