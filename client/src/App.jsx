import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import SignOut from "./pages/SignOut";
import SignUp from "./pages/SignUp";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import CreateListing from "./pages/CreateListing.jsx";
import UpdateListing from "./pages/UpdateListing.jsx";
import Listing from "./pages/Listing.jsx";
import Search from "./pages/Search.jsx";

export default function App() {
  return (
  
     <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/search" element={<Search/>}/>

       
        <Route  element={<PrivateRoute/>}>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/create-listing" element={<CreateListing/>}/>
        <Route path="/update-listing/:listingId" element={<UpdateListing/>}/>

        </Route>
        
        <Route path="/Signin" element={<Signin/>}/>
        <Route path="/SignOut" element={<SignOut/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path='/listing/:listingId' element={<Listing/>} />

      </Routes>
     </BrowserRouter>

  
    
  )
}
