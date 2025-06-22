

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import Projects from './pages/Projects'
import About from './pages/About'
import ContactPage  from './pages/ContactPage';


function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <HomePage
                       
                        />
                    }/>
            
          <Route path='/projects' element={<Projects/>}/>
                <Route path='/about' element={<About/>}/>
              
                
              
            </Routes>
        </BrowserRouter>
  );
}

export default App;
