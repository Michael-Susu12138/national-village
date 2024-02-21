// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import CreateRestaurantForm from "./test/RestaurantTest/CreateRestaurantForm";
import SearchRestaurant from "./test/RestaurantTest/SearchRestaurant";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/add" element={<AddNews />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/test-restaurantForm" element={<CreateRestaurantForm />} />
        <Route path="/test-restaurantSearch" element={<SearchRestaurant />} />
      </Routes>
    </Router>
  );
}

export default App;
