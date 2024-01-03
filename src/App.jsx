import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/Home";
import Basket from "./pages/Basket";
import Wishlist from "./pages/Wishlist";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import SignUp from "./pages/SignUp";
import DetailPage from "./pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/signUp" element={<SignUp/>}/>
            <Route path="/home/:id" element={<DetailPage/>}/>
            <Route path="/basket" element={<Basket/>}/>
            <Route path="/wishlist" element={<Wishlist/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
