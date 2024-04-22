// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

import Register from "./pages/Authorisation/Sign-up";
import Login from "./pages/Authorisation/Log-in";
import Tandon from "./pages/Tandon/Tandon";
import Detail from "./pages/Detail/Detail";
import AddRestaurant from "./pages/AddRestaurant/AddRestaurant";
import UCpage from "./pages/UC/ucpage";
import Contact from "./pages/Contact/Contact";

import CreateRestaurantForm from "./test/RestaurantTest/CreateRestaurantForm";
import SearchRestaurant from "./test/RestaurantTest/SearchRestaurant";
import GoogleMapComp from "./test/GoogleMap/GoogleMapComp";
import AddUser from "./test/User/AddUser";
import UserList from "./test/User/UserList";
import LoginUser from "./test/User/LoginUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tandon" element={<Tandon />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/restaurant/add" element={<AddRestaurant />} />
        <Route path="/uc" element={<UCpage />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/add" element={<AddNews />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/login" element={<Login />} /> */}

        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/test-restaurantForm" element={<CreateRestaurantForm />} />
        <Route path="/test-restaurantSearch" element={<SearchRestaurant />} />
        <Route path="/test-googleMap" element={<GoogleMapComp />} />
        <Route path="/test-user" element={<UserList />} />
        <Route path="/test-userAdd" element={<AddUser />} />
        <Route path="/test-userLogin" element={<LoginUser />} />
      </Routes>
    </Router>
  );
}

export default App;
