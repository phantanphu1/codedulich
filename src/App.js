import logo from './logo.svg';
import './App.css';
import {Routes,Route,BrowserRouter} from 'react-router-dom';
import Home from './pages/home/home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        
{/* <div className="APP">
  <Home/>
</div> */}
        
     </Routes>
     </BrowserRouter>
  );
}

export default App;
