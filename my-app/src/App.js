
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Book from "./face";
import Read from "./read";

function App() {
  return(
  <>
<BrowserRouter>
            <Routes>
                <Route path="/" element={<Book/>}/>
                <Route  path="/read"  element={<Read/>}/>
            </Routes> 
             </BrowserRouter>





  </>
    

  );
}

export default App;
