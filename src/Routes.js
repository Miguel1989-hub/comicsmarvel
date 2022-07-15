import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";


const RoutesApp = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/comicsmarvel" element={<Home />} />
    </Routes>
   </BrowserRouter>
  );
}

export default RoutesApp;