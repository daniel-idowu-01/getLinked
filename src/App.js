import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='app bg-bg-color z-1'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path='/register' element={ <Register /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
