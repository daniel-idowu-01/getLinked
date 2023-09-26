import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import { FaArrowUp } from "react-icons/fa";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

   // quick scroll to top button function
   const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className='app bg-bg-color z-1'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/contact" element={ <Contact /> } />
          <Route path='/register' element={ <Register /> } />
        </Routes>
      </BrowserRouter>

      <button
       onClick={handleClick}
       className='btn-top p-5 z-40 hover:opacity-75  fixed bottom-4 right-4 border text-white rounded-[100%]'
       >
         <FaArrowUp />
       </button>
    </div>
  );
}

export default App;
