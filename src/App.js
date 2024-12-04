import './App.css';
import Nav from './components/Nav';
import Search from './components/Search';
import AboutUs from './components/AboutUs';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      <Routes>
      <Route path="/" element={<>
      <h1>Search For Recipes</h1>
      <Search /></>} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element= {<>
      <h1>Search For Recipes</h1>
      <Search /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
